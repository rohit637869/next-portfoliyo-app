"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, CheckCircleIcon, DownloadIcon } from "lucide-react";

const certifications = [
  {
    title: "Google UX Design Certificate",
    issuer: "Coursera · Google",
    date: "June 2024",
    tag: "Design",
    fileUrl: "/certificates/google-ux.pdf",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2024",
    tag: "Cloud",
    fileUrl: "/certificates/aws-cloud.pdf",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "March 2024",
    tag: "JavaScript",
    fileUrl: "/certificates/js-algo.pdf",
  },
];

export default function Certifications() {
  return (
    <section className="py-10 px-4 md:px-10  container mx-auto" id="certifications">
      <h2 className="text-3xl font-bold mb-6 text-center">📜 Certifications</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Card key={index} className="hover:shadow-xl transition duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                {cert.title}
              </CardTitle>
              <Badge variant="outline" className="mt-2 w-fit">{cert.tag}</Badge>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Issuer:</strong> {cert.issuer}
              </p>
              <p className="flex items-center text-sm text-muted-foreground mb-4">
                <CalendarIcon className="h-4 w-4 mr-2" />
                {cert.date}
              </p>
              <a href={cert.fileUrl} download>
                <Button variant="outline" className="w-full flex gap-2">
                  <DownloadIcon className="h-4 w-4" />
                  Download Certificate
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
