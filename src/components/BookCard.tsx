"use client";

import { useState } from "react";
import { X } from "lucide-react";

const currentBook = {
  title: "My Year of Rest and Relaxation",
  author: "Ottessa Moshfegh",
  coverId: 8202400,
};

const library = [
  { title: "My Year of Rest and Relaxation", author: "Ottessa Moshfegh", coverId: 8202400 },
  { title: "Normal People", author: "Sally Rooney", coverId: 8794265 },
  { title: "Conversations with Friends", author: "Sally Rooney", coverId: 8199499 },
  { title: "Crying in H Mart", author: "Michelle Zauner", coverId: 10462708 },
  { title: "Pachinko", author: "Min Jin Lee", coverId: 8044605 },
  { title: "The Creative Act", author: "Rick Rubin", coverId: 13316390 },
];

function BookSpine({ coverId, title }: { coverId: number; title: string }) {
  return (
    <div
      className="shrink-0 flex flex-col items-center"
      style={{ width: "90px" }}
    >
      <div style={{ perspective: "600px" }}>
        <div
          style={{
            position: "relative",
            width: "90px",
            height: "132px",
            transform: "rotateY(-12deg)",
            boxShadow: "8px 12px 28px rgba(0,0,0,0.22)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "1px 3px 3px 1px",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.28) 0%, transparent 30%)",
              borderRadius: "1px 3px 3px 1px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function BookCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Book card ── */}
      <div className="bg-white border border-border rounded-2xl flex flex-col md:flex-row min-h-[140px]">
        {/* Mobile: Currently Reading label above image */}
        <p className="md:hidden text-[9px] tracking-[0.2em] uppercase text-stone/50 font-sans px-5 pt-5">Currently Reading</p>
        <div className="flex items-center justify-center p-5 md:hidden">
          <div style={{ perspective: "500px", transform: "rotate(6deg)", width: "80px" }}>
            <div style={{ position: "relative", width: "80px", height: "116px", transform: "rotateY(-18deg)", boxShadow: "10px 14px 32px rgba(0,0,0,0.3)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://covers.openlibrary.org/b/id/${currentBook.coverId}-L.jpg`} alt={currentBook.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "1px 3px 3px 1px", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 35%)", borderRadius: "1px 3px 3px 1px" }} />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-end md:justify-between min-w-0 p-5 md:pt-5 pt-0">
          <p className="hidden md:block text-[9px] tracking-[0.2em] uppercase text-stone/50 font-sans">Currently Reading</p>
          <div>
            <p className="text-xl font-bold text-ink leading-snug">{currentBook.title}</p>
            <p className="text-xs text-stone mt-1">{currentBook.author}</p>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center shrink-0 p-4" style={{ width: "35%" }}>
          <div style={{ perspective: "500px", transform: "rotate(6deg)", width: "100%", maxWidth: "100px" }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "145%", transform: "rotateY(-18deg)", boxShadow: "10px 14px 32px rgba(0,0,0,0.3)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://covers.openlibrary.org/b/id/${currentBook.coverId}-L.jpg`}
                alt={currentBook.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "1px 3px 3px 1px", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 35%)", borderRadius: "1px 3px 3px 1px" }} />
              <div style={{ position: "absolute", top: 0, right: "-4px", width: "4px", height: "100%", background: "linear-gradient(to right, #e0d8cc, #f5f0e8)", borderRadius: "0 2px 2px 0" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Library modal ── */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-8 pb-6">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone/50 font-sans mb-1">My Library</p>
                <p className="text-sm text-stone">Books I&apos;ve read, loved, or keep coming back to.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-stone/40 hover:text-ink transition-colors"
                aria-label="Close"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Shelf */}
            <div className="px-8 pb-8">
              <div className="overflow-x-auto">
                <div className="flex gap-5 pb-4" style={{ width: "max-content" }}>
                  {library.map((book) => (
                    <BookSpine key={book.coverId} coverId={book.coverId} title={book.title} />
                  ))}
                </div>
                {/* Shelf surface */}
                <div
                  className="rounded-sm"
                  style={{
                    height: "6px",
                    background: "linear-gradient(to bottom, #d4c9b8, #c4b8a4)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
