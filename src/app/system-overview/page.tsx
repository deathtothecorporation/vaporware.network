import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <main>
        <section className="content-zone">
          <p>
            An operating function is a programming environment that
            combines aspects of Erlang/OTP, the EVM, and Lisp. Like
          </p>
          <p>
            Erlang, the system is functional, supports concurrency
            through message passing, and programs can be hot reloaded
            without downtime. Like the EVM, program state is
            automatically persisted. Programs keep everything “in
            memory” and will run forever (but there is no global
            consensus). Like Lisp, programs can universally introspect
            themselves and their environment, and dynamically introduce
            new code.
          </p>
        </section>
      </main>
    </div>
  );
}
