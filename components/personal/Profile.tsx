'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Props } from "next/script";
import { Value } from "@radix-ui/react-select";

export default  function Profile( ) {

  let [submited,setSubmited] = useState(false)

  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    disableAccount: false,
  });



  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest()
    xhr.open("POST","/api/updateprofile",true)
    xhr.onload = function(){
      alert(xhr.response)
    }
    let fd = new FormData()
    fd.append("name",profile.name)
    fd.append("bio",profile.bio)
    xhr.send(fd)



    console.log("Saving Profile:", { ...profile, profileImage });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
        <CardHeader>
          
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <Label className="mb-2">Name</Label>
              <Input
                name="name"
                placeholder="Your name"
                value={profile.name}
                onChange={handleChange}
              />
            </div>

            {/* Bio */}
            <div>
              <Label className="mb-2">Bio</Label>
              <Textarea
                name="bio"
                placeholder="Write a short bio..."
                value={profile.bio}
                onChange={handleChange}
              />
            </div>

            {/* Profile Image */}
            {/* <div>
              <Label>Profile Image</Label>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
              {profileImage && (
                <p className="text-sm text-muted-foreground mt-1">{profileImage.name}</p>
              )}
            </div> */}

            {/* Disable Account */}
            {/* <div className="flex items-center justify-between">
              <Label>Disable Account</Label>
              <Switch
                checked={profile.disableAccount}
                onCheckedChange={(value) =>
                  setProfile((prev) => ({ ...prev, disableAccount: value }))
                }
              />
            </div> */}

            {/* Submit */}
            <Button type="submit" variant={submited?"ghost":"default"}  className="w-full">
              {submited ? "... Loading ": "Save Changes"}
            </Button>
          </form>
        </CardContent>
    </div>
  );
}
