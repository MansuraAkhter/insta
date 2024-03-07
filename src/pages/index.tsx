import { Inter } from "next/font/google";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import HomePage from "@/components/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
