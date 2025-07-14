"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Profile() {
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
    console.log("Saving Profile:", { ...profile, profileImage });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <Label>Name</Label>
              <Input
                name="name"
                placeholder="Your name"
                value={profile.name}
                onChange={handleChange}
              />
            </div>

            {/* Bio */}
            <div>
              <Label>Bio</Label>
              <Textarea
                name="bio"
                placeholder="Write a short bio..."
                value={profile.bio}
                onChange={handleChange}
              />
            </div>

            {/* Profile Image */}
            <div>
              <Label>Profile Image</Label>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
              {profileImage && (
                <p className="text-sm text-muted-foreground mt-1">{profileImage.name}</p>
              )}
            </div>

            {/* Disable Account */}
            <div className="flex items-center justify-between">
              <Label>Disable Account</Label>
              <Switch
                checked={profile.disableAccount}
                onCheckedChange={(value) =>
                  setProfile((prev) => ({ ...prev, disableAccount: value }))
                }
              />
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
