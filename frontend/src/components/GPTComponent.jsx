import React, { useState } from "react";

export default function GPTComponent() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleTeachMe = () => {
    setLoading(true);
    setResponse("");
    setTimeout(() => {
      setResponse(`Here is a lesson on "${topic}" by AI Teacher! 🚀`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#101323] overflow-x-hidden"
      style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      {/* <header className="flex items-center justify-between border-b border-[#21284a] px-10 py-3">
        <div className="flex items-center gap-4 text-white">
          <div className="w-4 h-4"></div>
          <h2 className="text-lg font-bold">Study Room</h2>
        </div>
        <button className="flex items-center gap-2 rounded-xl h-10 bg-[#21284a] px-3 text-white text-sm font-bold"></button>
      </header> */}

      {/* Main Content */}
      <main className="px-6 md:px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col w-full max-w-[960px]">
          <h2 className="text-white text-[28px] font-bold text-center pb-3 pt-5">
            Learn anything with AI
          </h2>

          {/* Input */}
          <div className="flex max-w-[480px] w-full items-end gap-4 px-4 py-3 mx-auto">
            <input
              type="text"
              placeholder="What do you want to learn?"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-xl border border-[#2f396a] bg-[#181d35] h-14 px-4 text-white placeholder-[#8e99cc] focus:outline-none"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center px-4 py-3">
            <button
              onClick={handleTeachMe}
              className="rounded-xl h-10 px-6 bg-[#607afb] text-white text-sm font-bold"
            >
              Teach Me
            </button>
          </div>

          {/* Response Card */}
          <div className="p-4">
            <div
              className="bg-cover bg-center flex flex-col justify-end rounded-xl pt-[132px] shadow-md"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0,0,0,0)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7samO_KZeVdiHkhk_T30F7eE-UkAX8a2ag2sU4vFYUYSDGhWv_xyToskZsCqG3zTvE0x582RZ130XKzpUDjKctjUh02wy4Y1amLrm_ZHfLQlK4KQy_ftkSIdFBXapdp5l992JTpHJC7Io3kjvrfY5QgMPYmmjlxXC8eSaoSypRtwBllHWwV2kcCOp_WMbudCGyLhBBFONTUxsMvTIbkJdQo9p4Zh4_1E1fhy8MlzobWtgmC2DS1Ya-Uh39aXz6pXe33fBpuemd1c')",
              }}
            >
              <div className="p-4">
                <p className="text-white text-2xl font-bold">
                  AI Teacher&apos;s Response
                </p>
                <p className="text-white text-base">
                  {response || "The AI teacher's response will appear here."}
                </p>
              </div>
            </div>
          </div>

          {/* Loading Section */}
          {loading && (
            <div className="flex flex-col gap-3 p-4">
              <p className="text-white">Loading...</p>
              <div className="w-full rounded bg-[#2f396a]">
                <div className="h-2 rounded bg-[#607afb] w-1/2"></div>
              </div>
              <p className="text-[#8e99cc] text-sm">
                Please wait while the AI teacher prepares the lesson.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
