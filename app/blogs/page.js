"use client"
import Blogs from "@/components/personal/Blogs";

export default function page() {

    
    return  (
        <>
            <div className="my-10"></div>
            <Blogs blogs={[1, 2, 3, 4, 65, 7, 8, 9]} />
        </>
    )
}
