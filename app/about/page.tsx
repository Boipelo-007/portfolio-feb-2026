import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <h1 className="text-4xl font-bold mb-12">About Me</h1>
            
            {/* Profile Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="md:col-span-1">
                    <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden">
                        <Image
                            src="/profile.jpg"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">Location</h2>
                    <p className="text-lg mb-6">📍 City, Country</p>
                    
                    <h2 className="text-2xl font-semibold mb-4">Bio</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Add your bio here...
                    </p>
                </div>
            </div>

            {/* Education Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Education</h2>
                <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold">Degree Name</h3>
                        <p className="text-gray-600">University Name</p>
                        <p className="text-sm text-gray-500">Year - Year</p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'CSS'].map((skill) => (
                        <div key={skill} className="bg-gray-100 rounded-lg p-4 text-center">
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Activities Section */}
            <section>
                <h2 className="text-3xl font-bold mb-6">Activities</h2>
                <div className="space-y-4">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Activity Title</h3>
                        <p className="text-gray-600">Description of activity...</p>
                    </div>
                </div>
            </section>
        </div>
    );
}