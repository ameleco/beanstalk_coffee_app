// src/components/LogoHeader.jsx
export default function LogoHeader() {
    return (
      <div
        className="absolute top-0 left-0 w-full z-30 flex justify-center pointer-events-none"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 12px)" }}
      >
        <img
          src="/beanstalk-logo.png"
          alt="Beanstalk Coffee & Sno"
          className="
            h-20 sm:h-24
            w-auto
            drop-shadow-md
            select-none
            -mb-14
          "
          draggable="false"
        />
      </div>
    );
  }