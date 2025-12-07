import { useState, useRef } from "react";
import { DiscordCard } from "@/components/DiscordCard";
import { RescuedUsers } from "@/components/RescuedUsers";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleReveal = () => {
    if (!revealed) {
      setRevealed(true);
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch((e) =>
          console.log("Audio play failed:", e)
        );
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden relative selection:bg-white selection:text-black">

      {/* Audio */}
      <audio ref={audioRef} src="/s.m4a" preload="auto" loop />

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeIn" }}
          className="absolute inset-0 bg-[url('/s.jpg')] bg-cover bg-center bg-no-repeat"
        />
      </div>

      <main className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center py-12 min-h-screen">

        {/* Doll */}
        <AnimatePresence>
          {!revealed && (
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="
                absolute 
                top-2 
                left-1/2 
                -translate-x-1/2 
                z-50
                flex flex-col items-center
              "
            >
              <div className="relative cursor-pointer group" onClick={handleReveal}>
                <motion.div
                  style={{ originY: 0, originX: 0.5 }}
                  animate={{ rotate: [1.5, -1.5] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 4.2, // MAIS LENTO, MAIS LEVE
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src="/doll.png"
                    alt="Doll"
                    className="w-40 md:w-52 object-contain scale-90"
                  />
                </motion.div>
              </div>

              {/* Botão colado nos pés*/}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReveal}
                transition={{ duration: 0.5 }}
                className="
                  mt-4 
                  px-8 py-3 
                  border border-white/20 
                  text-white font-mono text-xs 
                  tracking-[0.4em] uppercase
                  hover:bg-white hover:text-black
                  transition-all duration-500
                "
              >
                CLICK TO REVEAL
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: revealed ? 1 : 0,
            y: revealed ? 0 : 20,
            pointerEvents: revealed ? "auto" : "none",
            display: revealed ? "grid" : "none",
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full flex flex-col gap-12 items-center justify-center mt-12"
        >
          <div className="flex flex-col items-center gap-4">
            <DiscordCard />
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <RescuedUsers />
          </div>
        </motion.div>
      </main>
    </div>
  );
}
