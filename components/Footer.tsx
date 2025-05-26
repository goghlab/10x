import Image from 'next/image';

export function Footer() {
    return (
        <footer className="w-full py-4 mt-8 border-t">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img 
                        src="/V.png" 
                        alt="Victory Swimming Logo" 
                        className="w-10 h-10 mr-2"
                    />
                </div>
                <div className="text-sm text-gray-600">
                    © 2025 VICTORY SWIMMING ALL RIGHTS RESERVED
                </div>
            </div>
        </footer>
    );
} 