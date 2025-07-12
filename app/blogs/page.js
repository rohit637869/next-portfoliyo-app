"use client"
import Blogs from "@/components/personal/Blogs";
import { useLinkStatus } from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function page() {

    let parms = useSearchParams()
    console.log(parms.get('p'))
    const { pending } = useLinkStatus()
    return  pending ? (
    <div role="status" aria-label="Loading" className="spinner" />
  ) :(
        <>
            <div className="my-10"></div>
            <Blogs blogs={[1, 2, 3, 4, 65, 7, 8, 9]} />
        </>
    )
}
