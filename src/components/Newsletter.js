import React from "react";
import items from "../data/news.json";
import LazyVideo from "./LazyVideo";

export default function Newsletter() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-8">Newsletters, Articles & Adverts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <Card key={i} item={it} />
        ))}
      </div>
    </section>
  );
}

function Card({ item }) {
  const Wrapper = ({ children }) =>
    item.link ? (
      <a href={item.link} target="_blank" rel="noreferrer" className="block">
        {children}
      </a>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <div className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
        <h4 className="font-semibold mb-2">{item.title}</h4>
        {item.type === "video" && <LazyVideo src={item.url} title={item.title} />}
        {item.type === "image" && (
          <img src={item.url} alt={item.title} className="w-full h-44 object-cover rounded-lg" />
        )}
        {item.type === "text" && <p className="text-gray-600">{item.content}</p>}
      </div>
    </Wrapper>
  );
}
