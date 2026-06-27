"use client";
import { useState } from "react";
import Header from "@/components/Header";
import { mockData } from "@/data/mockData";
import PostList from "@/components/PosterList";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="app-layout">
      <div className="global-background">
        <img src="/page-bg.svg" alt="" />
      </div>

      <Header
        data={mockData}
        onDateChange={(_from, to) => setSelectedDate(to)}
      />

      <main className="main-content">
        <PostList selectedDate={selectedDate} />
      </main>
    </div>
  );
}
