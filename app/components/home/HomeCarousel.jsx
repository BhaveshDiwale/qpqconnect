"use client"
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image";

const HomeCarousel = async () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <CarouselItem
                        className="carousel-item active"
                        image="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        title="Largest B2B Platfrom for Shop Owners Owners and Businesses"
                    />
                    <CarouselItem
                        className="carousel-item"
                        image="https://images.unsplash.com/photo-1550676224-f5a1e8b6e15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        title="Largest B2B Platfrom for Shop Owners Owners and Businesses"
                    />
                    <CarouselItem
                        className="carousel-item"
                        image="https://plus.unsplash.com/premium_photo-1661963224588-6ddac46b650e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        title="Largest B2B Platfrom for Shop Owners Owners and Businesses"
                    />
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

function CarouselItem({ className, image, title }) {
    return (
        <div className={className}>
            <Image
                src={image} width={700} height={500}
                className="d-block w-100" alt="..." style={{ height: "700px" }}
            />
            <div className="carousel-caption d-none d-md-block" style={{ top: "340px", position: "absolute" }}>
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default HomeCarousel;
