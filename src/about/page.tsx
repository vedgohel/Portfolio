import { Navbar } from "@/components/navbar"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              We are a team of passionate developers and designers creating amazing digital experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver high-quality, innovative solutions that help businesses grow and succeed in the digital
                  world.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading provider of cutting-edge web and mobile solutions that transform how people interact
                  with technology.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Expert team with years of experience</li>
                <li>• Modern technologies and best practices</li>
                <li>• Responsive and professional designs</li>
                <li>• Ongoing support and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
