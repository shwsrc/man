import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TikTokUser {
  username: string;
  avatar: string;
}

export function RescuedUsers() {
  const [users, setUsers] = useState<string[]>([]);
  const [displayUsers, setDisplayUsers] = useState<TikTokUser[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch users list
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/resgatados.txt");
        if (!response.ok) throw new Error("Failed to load users");
        const text = await response.text();
        const userList = text.split("\n").map(u => u.trim()).filter(u => u.length > 0);
        setUsers(userList);
        setLoading(false);
      } catch (error) {
        console.error("Error loading users:", error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // Cycle users for display (Vertical Stack Effect)
  useEffect(() => {
    if (users.length === 0) return;

    let currentIndex = 0;

    const updateDisplay = async () => {
      const username = users[currentIndex];
      
      // In a real scenario, we would fetch the avatar from a TikTok API here.
      // Since public TikTok APIs are restrictive without keys, we use a high-quality placeholder
      // or a service if available. For this secure static site, we'll use a consistent style.
      
      // Simulating avatar fetch (replace with real API call if available)
      const newUser: TikTokUser = {
        username,
        avatar: `https://api.dicebear.com/7.x/initials/png?seed=${username}&backgroundColor=000000&textColor=ffffff&fontSize=50`
      };

      setDisplayUsers(prev => {
        const newStack = [newUser, ...prev].slice(0, 3); // Keep only top 3
        return newStack;
      });

      currentIndex = (currentIndex + 1) % users.length;
    };

    const interval = setInterval(updateDisplay, 3000);
    updateDisplay(); // Initial run

    return () => clearInterval(interval);
  }, [users]);

  if (loading) return null;

  return (
    <div className="w-full max-w-xs mx-auto mt-12">
      <div className="text-center mb-6">
        <h3 className="text-white/50 font-mono text-[10px] tracking-[0.3em] uppercase border-b border-white/10 pb-2 inline-block">
          Resgatados TikTok
        </h3>
      </div>
      
      <div className="relative h-64 flex flex-col items-center gap-4 overflow-hidden mask-image-gradient">
        <AnimatePresence mode="popLayout">
          {displayUsers.map((user, index) => (
            <motion.div
              key={`${user.username}-${index}`}
              layout
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1 - (index * 0.3), y: 0, scale: 1 - (index * 0.05) }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="w-full glass-panel p-3 flex items-center gap-4"
              style={{ zIndex: 10 - index }}
            >
              <img 
                src={user.avatar} 
                alt={user.username}
                className="w-10 h-10 object-cover border border-white/10 grayscale"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-wide">
                  @{user.username}
                </span>
                <span className="text-[10px] text-gray-500 font-mono">
                  VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
