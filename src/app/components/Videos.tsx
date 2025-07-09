
'use client';

export default function Videos() {
    const videos = [
        { id: '1B', title: 'Antes e Depois - Edinan Deuner', src: 'https://www.youtube.com/embed/xMIPUhe-9v8' },
        { id: '2B', title: 'Antes e Depois - Fernando dos S.', src: 'https://www.youtube.com/embed/LCAEdVCD2mM' },
        { id: '3B', title: 'Antes e Depois - Marcia Duarte', src: 'https://www.youtube.com/embed/eXP0tDhFUQs' },
        { id: '4B', title: 'Antes e Depois - Eduardo Soler', src: 'https://www.youtube.com/embed/3UmTNH92gkI' }
    ];

    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
    };

    const getEmbedUrl = (url: string) => {
        if (url.includes('drive.google.com')) {
            const match = url.match(/file\/d\/([a-zA-Z0-9_-]+)/);
            if (match && match[1]) {
                return `https://drive.google.com/embed?id=${match[1]}`;
            }
        } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
            return url;
        }
        return ''; // Fallback for unsupported URLs
    };

    return (
        <div className="flex flex-col justify-center mb-16 px-4">
            <h1 
                className="font-bold leading-tight text-center text-white mb-16 text-3xl sm:text-4xl lg:text-5xl"
            >
                Veja o que dizem nossos alunos:
            </h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
                    {videos.map((video) => (
                        <div 
                            key={video.id} 
                            className="flex flex-col items-center w-full bg-[#0B3E18] p-4 rounded-lg shadow-lg"
                        >
                            <h2 className="text-white font-semibold mb-4 text-center h-12">{video.title}</h2>
                            <div className="w-full h-52 lg:h-64 bg-black rounded-md overflow-hidden">
                                <iframe 
                                    title={video.id} 
                                    className="w-full h-full" 
                                    src={getEmbedUrl(video.src)} 
                                    allow="autoplay; encrypted-media" 
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div 
                className="flex justify-center mt-12"
            >
                <button
                    onClick={handleClick}
                    className="rounded-md text-white w-[96%] max-w-md h-16 md:h-20 bg-[#8EF27E] text-[#0B3E18] mt-6 manrope text-lg md:text-xl lg:text-2xl font-extrabold leading-tight text-center button hover:bg-[#76d469] transition-colors"
                >
                    QUERO TRANSFORMAR MEU INSTAGRAM
                </button>
            </div>
        </div>
    );
}
