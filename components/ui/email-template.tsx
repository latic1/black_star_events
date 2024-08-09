import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>

    <section className="flex w-full flex-grow items-center justify-center bg-zinc-200 p-4">
      <div className="flex h-64 w-full max-w-3xl text-zinc-50">
        <div className="flex h-full items-center justify-center rounded-l-3xl bg-zinc-900 px-8">
          {/* <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="140px"
            height="140px"
            viewBox="0 0 232 232"
            enable-background="new 0 0 232 232"
            xml:space="preserve"
          >
            <rect x="0" y="0" width="232" height="232" fill="#18181b" />
            <g transform="translate(16,16)">
              <g transform="translate(72,0) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,0) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,0) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,0) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,8) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,8) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,8) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(120,8) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,8) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,16) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(72,16) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,16) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,24) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,24) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,24) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,24) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,32) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,32) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,32) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,32) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,40) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,40) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,40) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,40) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(120,40) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,40) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,48) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,48) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,48) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,48) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,48) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,56) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,56) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,56) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(0,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(16,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(24,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(32,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(40,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(48,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(72,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(88,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(120,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(144,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(152,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(168,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(176,64) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(8,72) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(16,72) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(24,72) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(32,72) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(56,72) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,72) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,72) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,72) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(152,72) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(184,72) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(0,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(8,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(24,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(48,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(56,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(72,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(88,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(120,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(136,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(168,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(184,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,80) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(8,88) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(32,88) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(56,88) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,88) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(88,88) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,88) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,88) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,88) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(136,88) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,88) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(0,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(8,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(48,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(56,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(72,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(136,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(144,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(152,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(176,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(184,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,96) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(0,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(8,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(24,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(56,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(152,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(168,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(184,104) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(0,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(16,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(24,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(40,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(48,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(56,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(88,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(120,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(144,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(152,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(168,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(184,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,112) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(0,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(24,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(32,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(56,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(88,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(120,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(152,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,120) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(0,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(16,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(48,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(56,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(72,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(88,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(136,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(144,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(152,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(176,128) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,136) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,136) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,136) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,136) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(120,136) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,136) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,136) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(168,136) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,144) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,144) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,144) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(144,144) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,144) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(176,144) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(184,144) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,144) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,152) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,152) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(104,152) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,152) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,152) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(168,152) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(184,152) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,152) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(72,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(120,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(136,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(144,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(152,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(176,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(184,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,160) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(72,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(120,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(136,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(144,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(168,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(176,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(184,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,168) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,176) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,176) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(88,176) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(96,176) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(136,176) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(168,176) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(176,176) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,176) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(72,184) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,184) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(88,184) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(112,184) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(128,184) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(144,184) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(152,184) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,184) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(168,184) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,184) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(64,192) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(80,192) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(88,192) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(136,192) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(152,192) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,192) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(168,192) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(176,192) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(184,192) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(192,192) scale(0.08,0.08)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(0,0) scale(0.56, 0.56)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <g>
                    <rect
                      x="15"
                      y="15"
                      style="fill:none;"
                      width="70"
                      height="70"
                    />
                    <path d="M85,0H15H0v15v70v15h15h70h15V85V15V0H85z M85,85H15V15h70V85z" />
                  </g>
                </g>
              </g>
              <g transform="translate(144,0) scale(0.56, 0.56)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <g>
                    <rect
                      x="15"
                      y="15"
                      style="fill:none;"
                      width="70"
                      height="70"
                    />
                    <path d="M85,0H15H0v15v70v15h15h70h15V85V15V0H85z M85,85H15V15h70V85z" />
                  </g>
                </g>
              </g>
              <g transform="translate(0,144) scale(0.56, 0.56)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <g>
                    <rect
                      x="15"
                      y="15"
                      style="fill:none;"
                      width="70"
                      height="70"
                    />
                    <path d="M85,0H15H0v15v70v15h15h70h15V85V15V0H85z M85,85H15V15h70V85z" />
                  </g>
                </g>
              </g>
              <g transform="translate(16,16) scale(0.24, 0.24)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(160,16) scale(0.24, 0.24)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
              <g transform="translate(16,160) scale(0.24, 0.24)">
                <g transform="" style="fill: rgb(255, 255, 255);">
                  <rect width="100" height="100" />
                </g>
              </g>
            </g>
          </svg> */}
        </div>
        <div className="relative flex h-full flex-col items-center justify-between border-2 border-dashed border-zinc-50 bg-zinc-900">
          <div className="absolute -top-5 h-8 w-8 rounded-full bg-zinc-200"></div>
          <div className="absolute -bottom-5 h-8 w-8 rounded-full bg-zinc-200"></div>
        </div>
        <div className="grid h-full flex-grow grid-cols-2 rounded-r-3xl bg-zinc-900">
          <div>
            <img
              src="https://picsum.photos/0"
              className="h-full w-full rounded-xl object-cover"
              alt=""
            />
          </div>

          <div className="w-full p-5">
            <div className="flex flex-col items-center pb-5">
              <span className="text-xl font-bold">ATH</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-zinc-400">Date</span>
              <span className="font-mono">09/06/2023</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-zinc-400">Time</span>
              <span className="font-mono">17:45</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-zinc-400">Location</span>
              <span className="font-mono">A11/21C</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
