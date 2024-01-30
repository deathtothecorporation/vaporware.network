'use client'
// import React, { useState, useEffect } from 'react';
// import Image from "next/image";

export default function Container() {
  return (
    <video controls>
      <source src="/images/vaporware-devices-600.mp4" type="video/mp4" />
      Your browser does not support video
    </video>
  );
}
