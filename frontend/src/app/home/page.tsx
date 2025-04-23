"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

interface FileData {
  id: number;
  name: string;
  createdAt: string;
  downloadUrl: string;
  previewUrl: string;
}

export default function HomePage() {
  const [files, setFiles] = useState<FileData[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null);
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fetchFiles = async () => {
    const response = await fetch("http://localhost:8000/archive", {
      headers: { Authorization: `Bearer ${document.cookie.split("token=")[1]}` },
    });
    const data = await response.json();
    setFiles(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);
    /*
    TEMPO LIMITE NÃO SUFICIENTE PARA FAZER UPLOAD FUNCIONAL COM BACKEND
    
    const formData = new FormData(e.currentTarget);
    
    await fetch("http://localhost:8000/archive/upload", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${document.cookie.split("token=")[1]}`,
      },
    });
    */
    setUploading(false);
    fetchFiles();
  };

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/";
    window.location.href = "/login";
  };

  return (
    <main className="p-4 max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col items-center gap-4">
        <Image
          alt="BackIT"
          width={180}
          height={38}
          src="/backup.svg"
          className="dark:invert"
        />
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">BackIT Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="p-4 shadow rounded" style={{ backgroundColor: "#40415c" }}>
        <form onSubmit={handleUpload} className="flex items-center gap-2">
          <input
            type="text"
            name="title"
            placeholder="Título do arquivo"
            required
            className="border px-2 py-1 rounded w-1/3"
          />
          <input
            type="file"
            name="file"
            required
            className="border px-2 py-1 rounded w-full"
          />
          <button
            type="submit"
            disabled={uploading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>

      <div className="p-4 shadow rounded" style={{ backgroundColor: "#40415c" }}>
        <h2 className="text-xl font-semibold mb-2">My Files</h2>
        <div className="grid gap-2">
          {files.map((file) => (
            <button
              key={file.id}
              onClick={() => {
                setSelectedFile(file);
                setShowModal(true);
              }}
              className="text-left w-full px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
            >
              {file.name} - {new Date(file.createdAt).toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {showModal && selectedFile && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-2xl">
            <h3 className="text-lg font-bold mb-2">{selectedFile.name}</h3>
            <a
              href={selectedFile.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Download File
            </a>
            {selectedFile.previewUrl && (
              <iframe
                src={selectedFile.previewUrl}
                className="w-full h-96 border mt-4"
              />
            )}
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
