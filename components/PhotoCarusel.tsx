'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export default function PhotoCarusel(){
    return(
        <Carousel 
            className="max-w-[1600px] mx-auto"
            plugins={[
                Autoplay({
                    delay: 2000,
                })
            ]}
        >
            <CarouselContent className="-ml-1">
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Image 
                            src={'/photo4.jpg'}
                            alt=""
                            width={500}
                            height={0}
                            className="h-auto"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Image 
                            src={'/photo5.jpg'}
                            alt=""
                            width={500}
                            height={0}
                        />
                    </div>
                </CarouselItem>
                
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Image 
                            src={'/photo6.jpg'}
                            alt=""
                            width={500}
                            height={0}
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Image 
                            src={'/photo12.jpg'}
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Image 
                            src={'/photo7.jpg'}
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 items-center">
                    <div className="p-1">
                        <Image 
                            src={'/photo10.jpg'}
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Image 
                            src={'/photo8.jpg'}
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Image 
                            src={'/photo11.jpg'}
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}