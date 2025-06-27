import Curve from "@/components/Layout/Curve";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Work() {
  const [selectedId, setSelectedId] = useState(null);

  const items = Array.from({ length: 6 }, (_, i) => ({
    id: i,
  }));

  return (
    <>
      <Curve>
        <div className="flex flex-wrap gap-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              // layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <motion.h5 className="text-sm text-gray-500">{item.subtitle}</motion.h5>
              <motion.h2 className="text-lg font-semibold">{item.title}</motion.h2>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId !== null && (
            <motion.div
              // layoutId={selectedId}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
           
            >
              <motion.div
                 initial={{ opacity: 0, scaleX: 0, scaleY: 0}}
                 animate={{ opacity: 1,scaleX: 1,scaleY: 1}}
                 exit={{ opacity: 0, scaleX: 0, scaleY:0}}
                 transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
                {/* <motion.h5 className="text-sm text-gray-500">{items[selectedId].subtitle}</motion.h5> */}
                {/* <motion.h2 className="text-lg font-semibold">{items[selectedId].title}</motion.h2> */}
                <motion.button
                  onClick={() => setSelectedId(null)}
                  className="mt-4 bg-red  py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Curve>
    </>
  );
}
