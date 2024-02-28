
import Link from "next/link";

export default function OurCourses() {

  

  const courses = [
    {
      id: 1,
      title: "Guitar Fundamentals",
      slug: "guitar-fundamentals",
      description:
        "Learn the basics of playing guitar with our comprehensive beginner's course.",
      price: 99.99,
      instructor: "John Doe",
      isFeatured: true,
      image: "https://i.postimg.cc/MZRD4vXT/guitar.jpg",
    },
    {
      id: 2,
      title: "Piano for Beginners",
      slug: "piano-for-beginners",
      description:
        "Start your musical journey with foundational piano skills taught by expert instructors.",
      price: 109.99,
      instructor: "Jane Smith",
      isFeatured: false,
      image: "https://i.postimg.cc/C5y45VrS/piano.jpg",
    },
    {
      id: 3,
      title: "Advanced Vocal Techniques",
      slug: "advanced-vocal-techniques",
      description:
        "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
      price: 119.99,
      instructor: "Emily Johnson",
      isFeatured: true,
      image: "https://i.postimg.cc/QM95TyTt/vocalist.jpg",
    },
    {
      id: 4,
      title: "Drumming Mastery",
      slug: "drumming-mastery",
      description:
        "Master the drums with our comprehensive course covering all skill levels.",
      price: 129.99,
      instructor: "Mike Brown",
      isFeatured: false,
      image: "https://i.postimg.cc/QM27kJQq/drumming.jpg",
    },
    {
      id: 5,
      title: "Jazz Improvisation",
      slug: "jazz-improvisation",
      description:
        "Learn the art of jazz improvisation with this course designed for all levels.",
      price: 139.99,
      instructor: "Chris Davis",
      isFeatured: false,
      image: "https://i.postimg.cc/Px1w6vKn/jazz.jpg",
    },
    {
      id: 6,
      title: "Music Production Fundamentals",
      slug: "music-production-fundamentals",
      description:
        "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
      price: 149.99,
      instructor: "Alex Wilson",
      isFeatured: true,
      image: "https://i.postimg.cc/WznJVRQ9/music-prod.jpg",
    },
    {
      id: 7,
      title: "Songwriting Essentials",
      slug: "songwriting-essentials",
      description:
        "Learn the essentials of songwriting to express your musical creativity.",
      price: 159.99,
      instructor: "Samantha Miller",
      isFeatured: false,
      image: "https://i.postimg.cc/sXJ2QYwx/song-writing.jpg",
    },
    {
      id: 8,
      title: "Electronic Music Production",
      slug: "electronic-music-production",
      description:
        "Create compelling electronic music with our course designed for beginners to advanced users.",
      price: 169.99,
      instructor: "Luke Harris",
      isFeatured: true,
      image: "https://i.postimg.cc/43QGBJtF/edm-1.jpg",
    },
    {
      id: 9,
      title: "Classical Music History",
      slug: "classical-music-history",
      description:
        "Explore the rich history of classical music from its origins to the present day.",
      price: 179.99,
      instructor: "Grace Lee",
      isFeatured: false,
      image: "https://i.postimg.cc/vBTKfMvn/classical-music.jpg",
    },
    {
      id: 10,
      title: "Blues Guitar Techniques",
      slug: "blues-guitar-techniques",
      description:
        "Discover the techniques of blues guitar to add soul and depth to your playing.",
      price: 189.99,
      instructor: "Ethan Moore",
      isFeatured: true,
      image: "https://i.postimg.cc/V5QZxtP9/blues.jpg",
    },
  ];
  return (
    <div className=" min-h-screen flex justify-center  py-16">
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {courses.map((course, index) => (
            <div key={index} className="card w-96 bg-base-100 shadow-2xl">
              <div className="card-body items-center text-center shadow-lg shadow-cyan-300">
                <h2 className="card-title">{course.title}</h2>
                <p>{course.description}</p>
                <div className="card-actions mt-2">
                  <Link href={`/OurCourses/${course.id}`}>
                    <button className="rounded-md  px-4 py-2 bg-white text-black hover:bg-gray-900 hover:text-white ">
                      Learn more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
