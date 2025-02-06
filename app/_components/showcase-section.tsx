import Image from "next/image";

export default function Showcase(): React.JSX.Element {
  return (
    <section className="min-h-screen overflow-hidden -mt-72 -mb-32">
      <div className="flex justify-center items-center">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-supernova-300/30 to-supernova-500/45 blur-[120px] rounded-full"></div>

            <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-gray-800/50 p-6 rounded-2xl backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="aspect-video bg-neutral-800/50 rounded-xl overflow-hidden border border-gray-700/50">
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                  <Image
                    src="/writex-demo.png"
                    width={1920}
                    height={1080}
                    alt="Showcase"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
