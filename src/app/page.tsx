import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogPosts, getJSONData } from "@/lib/serverUtils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
  FileTextIcon,
  
} from "@radix-ui/react-icons";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faSwift, faJs, faHtml5, faCss3, faCuttlefish, faGithub, faDocker, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faToolbox, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { VideoIcon } from "@radix-ui/react-icons";


export default async function Home() {
  const data = await getJSONData();
  const posts = await getBlogPosts();

  return (
    <main>
      {/* Banner Section */}
      <section
        id="home"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-1/2 mx-auto lg:w-1/3">
            <Image
              src="/assets/RohanSah.jpg"
              width={280}
              height={280}
              alt="Developer"
              className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full border"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                Hey 👋, I&apos;m {data.personalInfo.name}
              </h1>
            </div>
            <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
              {data.personalInfo.bio}
            </p>
            <div className="space-x-4">
              <Link
                target="_blank"
                href={data.contactInfo.github}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link
                target="_blank"
                href={data.contactInfo.linkedin}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={`mailto:${data.contactInfo.email}`}>
                <Button variant="secondary" size="icon">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/assets/ROHANRESUME.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon">
                  <FileTextIcon className="h-4 w-4" /> 
                </Button>
              </Link>

            </div>
          </div>
        </div>
        ;
      </section>


      {/* Experience Section */}
      <section
        id="experience"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">
          Work Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">
                {exp.role} @
                <Link
                  href={exp.companyWebsite}
                  target="_blank"
                  className="ml-2 text-primary"
                >
                  {exp.company}
                </Link>
              </h4>
              <div className="text-gray-500 dark:text-gray-400">
                {exp.startDate} - {exp.endDate}
              </div>
              <div className="mt-2">
                <h6 className="font-medium">Key Responsibilities:</h6>
                <ul className="text-gray-500 text-sm list-disc pl-4">
                  {exp.keyResponsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
              {/* Skills/Technologies Badges */}
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">My Projects</h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          {data.projects.map((project) => (
            <Card key={project.title} className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 p-2 flex items-center">
                <Image
                  src={project.cover}
                  alt="Project 1"
                  height={200}
                  width={300}
                  className="rounded-md object-cover"
                />
              </div>

              <div className="w-full lg:w-2/3">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-3">
                    <Link
                      target="_blank"
                      href={project.live_url}
                      prefetch={false}
                    >
                      <Button size="sm">
                        <GlobeIcon className="h-3 w-3 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link
                      target="_blank"
                      href={project.code_repo_url}
                      prefetch={false}
                    >
                      <Button size="sm" variant="outline">
                        <GitHubLogoIcon className="h-3 w-3 mr-2" />
                        Open Repository
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
          <Card className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 p-2 flex items-center">
              <Image
                src="/assets/datascrape.png" 
                alt="New Project"
                height={200}
                width={300}
                className="rounded-md object-cover"
              />
            </div>

            <div className="w-full lg:w-2/3">
              <CardHeader>
                <CardTitle>Database retrieval augmented webscraper</CardTitle>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML/CSS/</Badge>
                  <Badge variant="secondary">Javascript</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">Puppeteer</Badge>
                  <Badge variant="secondary">BodyParser</Badge>

                  {/* Add more tech badges as needed */}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Developed website scraper connected to a MongoDB database which retreives parsed puppeteer scraped data through BodyParser.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex space-x-3">
                  <Link
                    target="_blank"
                    href="https://github.com/exploratoryprorammer/OLOSTEP-HACKATHON"
                    prefetch={false}
                  >
                    <Button size="sm" variant="outline">
                      <GitHubLogoIcon className="h-3 w-3 mr-2" />
                      Github Repository
                    </Button>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/watch?v=quwSMkApqiY&t=3s"
                    prefetch={false}
                  >
                    <Button size="sm" variant="outline">
                      <VideoIcon className="h-3 w-3 mr-2" />
                      Youtube Demo
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </div>
          </Card>
          <Card className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 p-2 flex items-center">
              <Image
                src="/assets/360_F_565320435_Q6evKbBxGefENJTfoMt0ZbGYgoiHVxsH.jpg" 
                alt="New Project"
                height={200}
                width={300}
                className="rounded-md object-cover"
              />
            </div>

            <div className="w-full lg:w-2/3">
              <CardHeader>
                <CardTitle>TrailerZone</CardTitle>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">MaterialUI</Badge>
                  <Badge variant="secondary">Spring</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">TMDB API</Badge>
                  {/* Add more tech badges as needed */}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Developed webapp to showcase trending movie trailers with feature to read and write reviews
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex space-x-3">
                  <Link
                    target="_blank"
                    href="https://github.com/exploratoryprorammer/StreamingZoneFrontEnd"
                    prefetch={false}
                  >
                    <Button size="sm" variant="outline">
                      <GitHubLogoIcon className="h-3 w-3 mr-2" />
                      Frontend Repository
                    </Button>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://github.com/exploratoryprorammer/StreamingZoneBackend"
                    prefetch={false}
                  >
                    <Button size="sm" variant="outline">
                      <GitHubLogoIcon className="h-3 w-3 mr-2" />
                      Backend Repository
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </div>
          </Card>
          
        </div>

      </section>

      {/* Education Section */}
      <section
        id="education"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Education</h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.education.map((ed) => (
            <div key={ed.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">{ed.degree}</h4>
              <h5 className="font-medium">{ed.institution}</h5>
              <div className="text-gray-500 dark:text-gray-400">
                {ed.startDate} - {ed.endDate}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
