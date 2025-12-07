import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

interface LanyardData {
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    global_name: string;
  };
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: Array<{
    name: string;
    state?: string;
    details?: string;
    assets?: {
      large_image?: string;
      small_image?: string;
    };
  }>;
}

const DISCORD_ID = "388293380926472192";

export function DiscordCard() {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const ws = new WebSocket("wss://api.lanyard.rest/socket");

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: DISCORD_ID,
          },
        })
      );
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.t === "INIT_STATE") {
        setData(message.d);
        setLoading(false);
      }
      if (message.t === "PRESENCE_UPDATE") {
        setData(message.d);
      }
    };

    ws.onerror = () => {
      setError(true);
      setLoading(false);
    };

    return () => {
      ws.close();
    };
  }, []);

  if (error) return null;

  if (loading || !data) {
    return (
      <div className="w-64 h-64 glass-panel flex items-center justify-center">
        <Skeleton className="h-20 w-20 rounded-none bg-white/10" />
      </div>
    );
  }

  const { discord_user, discord_status } = data;
  const avatarUrl = `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png?size=256`;

  return (
    <div className="relative group">
      {/* Glassmorphism Card - Square & Transparent */}
      <div className="w-64 h-auto min-h-[256px] bg-transparent border border-white/20 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
        
        {/* Avatar Container */}
        <div className="relative">
          <img
            src={avatarUrl}
            alt={discord_user.username}
            className="h-24 w-24 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/20"
          />
          {/* Status Indicator (Minimalist Dot) */}
          <div className={`absolute bottom-0 right-0 w-3 h-3 border border-black ${
            discord_status === 'online' ? 'bg-white' : 'bg-gray-500'
          }`} />
        </div>

        {/* User Info */}
        <div className="text-center space-y-1">
          <h2 className="text-lg font-bold tracking-widest uppercase text-white">
            {discord_user.global_name || discord_user.username}
          </h2>
          <p className="text-xs text-gray-400 font-mono tracking-wider">
            @{discord_user.username}
          </p>
        </div>

        {/* Activity (if any) */}
        {data.activities && data.activities.length > 0 && (
          <div className="w-full pt-4 border-t border-white/10 mt-2 text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Status</p>
            <p className="text-xs text-white truncate w-full">
              {data.activities[0].name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
