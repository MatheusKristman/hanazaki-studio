import { motion, AnimatePresence } from "framer-motion";
import Video from "next-video";
import getStarted from "/videos/get-started.mp4";
import VideoAbout from "/videos/video-about.mp4";

import {
  modalAnimation,
  overlayAnimation,
} from "@/constants/framer/video-modal-animation";
import { SyntheticEvent } from "react";

interface VideoModalProps {
  isModalOpen: boolean;
  CloseModal: (e: SyntheticEvent) => void;
}

export function VideoModal({ isModalOpen, CloseModal }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          onClick={CloseModal}
          key="video-modal-key"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={overlayAnimation}
          className="w-screen h-screen bg-[#0E0E0E]/75 fixed top-0 left-0 right-0 bottom-0 z-[9999] text-center overflow-auto p-6 after:h-full after:content-[''] after:inline-block after:align-middle"
        >
          <motion.div
            onClick={(e: SyntheticEvent) => e.stopPropagation()}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={modalAnimation}
            className="w-full max-w-[1000px] aspect-video bg-white rounded-2xl inline-block align-middle overflow-hidden"
          >
            <Video src={VideoAbout} accentColor="#B9A568" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
