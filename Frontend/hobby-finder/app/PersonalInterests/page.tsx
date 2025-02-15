"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const items = ["Reading", "Gaming", "Cooking", "Traveling", "Sports", "Music", "Art"];

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="background">
      <Image
        src="/pineTrees.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="blur"
      />
      <div className="content">
        <h1 className="header">Let's get to know you...</h1>
        <h2 className="subheader">What are your interests?</h2>
        <div className="scrollable-list">
          {items.map((item) => (
            <div key={item} className="list-item">
              <label htmlFor={item}>{item}</label>

              <input
                type="checkbox"
                id={item}
                checked={selectedItems.includes(item)}
                onChange={() => toggleItem(item)}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .background {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-family: 'Isok Web', sans-serif;
        }
        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: white;
        }
        .header {
          font-size: 3rem;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        }
        .subheader {
          font-size: 2rem;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        }
        .scrollable-list {
          margin-top: 20px;
          max-height: 200px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .list-item {
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 300px;
        }
        .blur {
          filter: blur(8px);
        }
      `}</style>
    </div>
  );
}