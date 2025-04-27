"use client";
import { KeyTextField } from "@prismicio/client";
import { Plus } from "lucide-react";
import { useSpring, motion } from "motion/react";
import React, { useEffect, useState } from "react";

type StatsProps = {
  count: number;
  text: KeyTextField;
};

export function StatsCounter({ count, text }: StatsProps) {
  const [displayStats, setDisplayStats] = useState(0);
  const springStatsCount = useSpring(0, {
    bounce: 0,
    duration: 1000,
  });
  

  springStatsCount.on("change", (value) => {
    setDisplayStats(Math.round(value));
  });

  useEffect(() => {
    springStatsCount.set(count);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center"
    >
      <span className="flex items-center">
        <span className="text-7xl font-extrabold">{displayStats}</span>

        <Plus className="size-12 text-green" />
      </span>

      <span className="text-lg text-gray-500">{text}</span>
    </motion.div>
  );
}
