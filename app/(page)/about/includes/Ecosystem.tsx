"use client";

import React, { useMemo, useState } from "react";
import type { IconType } from "react-icons";
import {
    SiAngular,
    SiAnsible,
    SiApachekafka,
    SiDigitalocean,
    SiDjango,
    SiDocker,
    SiExpress,
    SiFlutter,
    SiGithubactions,
    SiGooglecloud,
    SiGraphql,
    SiIonic,
    SiJenkins,
    SiJquery,
    SiJavascript,
    SiKotlin,
    SiKubernetes,
    SiNestjs,
    SiNodedotjs,
    SiOpenai,
    SiPostgresql,
    SiPytorch,
    SiReact,
    SiSwift,
    SiTensorflow,
    SiTerraform,
    SiVuedotjs,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa6";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

type EcosystemCategoryId =
    | "frontend"
    | "backend"
    | "mobile"
    | "cloud"
    | "devops"
    | "emerging-tech";

interface EcosystemTechnology {
    name: string;
    role: string;
    icon: IconType;
    iconColor: string;
}

interface EcosystemCategory {
    id: EcosystemCategoryId;
    order: string;
    label: string;
    technologies: EcosystemTechnology[];
}

const ecosystemCategories: EcosystemCategory[] = [
    {
        id: "frontend",
        order: "01",
        label: "Frontend",
        technologies: [
            {
                name: "Vue.js",
                role: "Framework",
                icon: SiVuedotjs,
                iconColor: "#42B883",
            },
            {
                name: "jQuery",
                role: "JavaScript Library",
                icon: SiJquery,
                iconColor: "#0769AD",
            },
            {
                name: "Angular",
                role: "Framework",
                icon: SiAngular,
                iconColor: "#DD0031",
            },
            {
                name: "React JS",
                role: "Components Library",
                icon: SiReact,
                iconColor: "#61DAFB",
            },
            {
                name: "JavaScript",
                role: "Core Language",
                icon: SiJavascript,
                iconColor: "#EFD81D",
            },
        ],
    },
    {
        id: "backend",
        order: "02",
        label: "Backend",
        technologies: [
            {
                name: "Node.js",
                role: "Runtime Environment",
                icon: SiNodedotjs,
                iconColor: "#539E43",
            },
            {
                name: "Express",
                role: "Backend Framework",
                icon: SiExpress,
                iconColor: "#20232A",
            },
            {
                name: "NestJS",
                role: "Server Framework",
                icon: SiNestjs,
                iconColor: "#E0234E",
            },
            {
                name: "Django",
                role: "Python Framework",
                icon: SiDjango,
                iconColor: "#0F5132",
            },
            {
                name: "PostgreSQL",
                role: "Relational Database",
                icon: SiPostgresql,
                iconColor: "#336791",
            },
        ],
    },
    {
        id: "mobile",
        order: "03",
        label: "Mobile",
        technologies: [
            {
                name: "Flutter",
                role: "Cross-platform SDK",
                icon: SiFlutter,
                iconColor: "#46D1FD",
            },
            {
                name: "React Native",
                role: "Native App Framework",
                icon: SiReact,
                iconColor: "#4EC9F5",
            },
            {
                name: "Kotlin",
                role: "Android Development",
                icon: SiKotlin,
                iconColor: "#7F52FF",
            },
            {
                name: "Swift",
                role: "iOS Development",
                icon: SiSwift,
                iconColor: "#F05138",
            },
            {
                name: "Ionic",
                role: "Hybrid App Toolkit",
                icon: SiIonic,
                iconColor: "#3880FF",
            },
        ],
    },
    {
        id: "cloud",
        order: "04",
        label: "Cloud",
        technologies: [
            {
                name: "AWS",
                role: "Cloud Platform",
                icon: FaAws,
                iconColor: "#FF9900",
            },
            {
                name: "Microsoft Azure",
                role: "Cloud Platform",
                icon: FaMicrosoft,
                iconColor: "#00A4EF",
            },
            {
                name: "Google Cloud",
                role: "Cloud Platform",
                icon: SiGooglecloud,
                iconColor: "#4285F4",
            },
            {
                name: "Docker",
                role: "Containerization",
                icon: SiDocker,
                iconColor: "#2496ED",
            },
            {
                name: "DigitalOcean",
                role: "Compute Infrastructure",
                icon: SiDigitalocean,
                iconColor: "#0080FF",
            },
        ],
    },
    {
        id: "devops",
        order: "05",
        label: "DevOps",
        technologies: [
            {
                name: "Kubernetes",
                role: "Container Orchestration",
                icon: SiKubernetes,
                iconColor: "#326CE5",
            },
            {
                name: "Jenkins",
                role: "CI/CD Automation",
                icon: SiJenkins,
                iconColor: "#D24939",
            },
            {
                name: "GitHub Actions",
                role: "Workflow Pipelines",
                icon: SiGithubactions,
                iconColor: "#2088FF",
            },
            {
                name: "Terraform",
                role: "Infrastructure as Code",
                icon: SiTerraform,
                iconColor: "#844FBA",
            },
            {
                name: "Ansible",
                role: "Configuration Management",
                icon: SiAnsible,
                iconColor: "#EE0000",
            },
        ],
    },
    {
        id: "emerging-tech",
        order: "06",
        label: "Emerging Tech",
        technologies: [
            {
                name: "OpenAI",
                role: "Generative AI",
                icon: SiOpenai,
                iconColor: "#10A37F",
            },
            {
                name: "TensorFlow",
                role: "Machine Learning",
                icon: SiTensorflow,
                iconColor: "#FF6F00",
            },
            {
                name: "PyTorch",
                role: "Deep Learning",
                icon: SiPytorch,
                iconColor: "#EE4C2C",
            },
            {
                name: "Apache Kafka",
                role: "Event Streaming",
                icon: SiApachekafka,
                iconColor: "#231F20",
            },
            {
                name: "GraphQL",
                role: "Query Language",
                icon: SiGraphql,
                iconColor: "#E10098",
            },
        ],
    },
];

const Ecosystem = () => {
    const [activeCategoryId, setActiveCategoryId] =
        useState<EcosystemCategoryId>("frontend");

    const activeCategory = useMemo(
        () =>
            ecosystemCategories.find(
                (category) => category.id === activeCategoryId
            ) ?? ecosystemCategories[0],
        [activeCategoryId]
    );

    return (
        <section className="w-full bg-white py-16 md:py-20">
            <Container>
                <div className="max-w-4xl">
                    <div className="flex justify-center md:justify-start">
                        <InfoBadge
                            icon="/icons/Badges/ecosystem.png"
                            text="Ecosystem"
                            className="mb-7 h-12"
                        />
                    </div>

                    <h2 className="font-clash text-center text-[28px] font-medium text-black md:text-left md:text-[40px]">
                        Technologies and Platform We Work With
                    </h2>

                    <p className="font-funnel mt-4 max-w-4xl text-[18px] leading-[1.55] text-[#555555] md:text-[16px]">
                        Our cross-platform expertise allows us to engineer
                        seamless operational pipelines across infrastructure.
                    </p>
                </div>

                <div className="mt-8 overflow-x-auto pb-1 md:mt-10">
                    <div
                        role="tablist"
                        aria-label="Technology categories"
                        className="flex min-w-max gap-6 border-b border-[#d8dde1] md:gap-10"
                    >
                        {ecosystemCategories.map((category) => {
                            const isActive = activeCategoryId === category.id;

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`${category.id}-panel`}
                                    onClick={() => {
                                        setActiveCategoryId(category.id);
                                    }}
                                    className={`font-clash border-b-2 pb-3 text-[20px] transition-colors duration-300 md:text-[24px] ${
                                        isActive
                                            ? "border-btn-primary text-btn-primary"
                                            : "border-transparent text-[#c5c8cc] hover:text-[#7c848d]"
                                    }`}
                                >
                                    <span>{category.order}</span>{" "}
                                    <span>{category.label.toUpperCase()}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div
                    id={`${activeCategory.id}-panel`}
                    role="tabpanel"
                    className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 xl:grid-cols-5"
                >
                    {activeCategory.technologies.map((technology) => {
                        const Icon = technology.icon;

                        return (
                            <article
                                key={`${activeCategory.id}-${technology.name}`}
                                className="group rounded-[14px] border border-[#89cbe0] bg-[#f5f7f8] px-4 py-8 text-center transition-all duration-300 md:py-9"
                            >
                                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-[18px] md:h-20 md:w-20">
                                    <Icon
                                        className="h-11 w-11 md:h-12 md:w-12"
                                        style={{
                                            color: technology.iconColor,
                                        }}
                                    />
                                </div>

                                <h3 className="font-clash mt-5 text-[14px] font-medium tracking-[0.01em] text-[#0f81a0] md:text-[16px]">
                                    {technology.name.toUpperCase()}
                                </h3>

                                <p className="font-funnel mt-2 text-[12px] leading-[1.45] text-[#4f555d] md:text-[12px]">
                                    {technology.role.toUpperCase()}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Ecosystem;
