
import { Clock, CheckCircle, ShieldCheck, PenTool, Sparkles, Droplets, Zap, Flame, Home, Camera } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface ServiceDetail {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    benefits: string[];
    process: string[];
    benefitIcon: LucideIcon;
    processIcon: LucideIcon;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
    urgences: {
        id: 'urgences',
        title: 'services.urgences.title',
        description: 'services.urgences.description',
        fullDescription: 'services.urgences.fullDesc',
        benefits: [
            'services.urgences.benefit1',
            'services.urgences.benefit2',
            'services.urgences.benefit3'
        ],
        process: [
            'services.urgences.process1',
            'services.urgences.process2',
            'services.urgences.process3'
        ],
        benefitIcon: Clock,
        processIcon: ShieldCheck
    },
    sdb: {
        id: 'sdb',
        title: 'services.sdb.title',
        description: 'services.sdb.description',
        fullDescription: 'services.sdb.fullDesc',
        benefits: [
            'services.sdb.benefit1',
            'services.sdb.benefit2',
            'services.sdb.benefit3'
        ],
        process: [
            'services.sdb.process1',
            'services.sdb.process2',
            'services.sdb.process3'
        ],
        benefitIcon: Sparkles,
        processIcon: PenTool
    },
    traitement: {
        id: 'traitement',
        title: 'services.traitement.title',
        description: 'services.traitement.description',
        fullDescription: 'services.traitement.fullDesc',
        benefits: [
            'services.traitement.benefit1',
            'services.traitement.benefit2',
            'services.traitement.benefit3'
        ],
        process: [
            'services.traitement.process1',
            'services.traitement.process2',
            'services.traitement.process3'
        ],
        benefitIcon: Droplets,
        processIcon: CheckCircle
    },
    technique: {
        id: 'technique',
        title: 'services.technique.title',
        description: 'services.technique.description',
        fullDescription: 'services.technique.fullDesc',
        benefits: [
            'services.technique.benefit1',
            'services.technique.benefit2',
            'services.technique.benefit3'
        ],
        process: [
            'services.technique.process1',
            'services.technique.process2',
            'services.technique.process3'
        ],
        benefitIcon: Zap,
        processIcon: Clock
    },
    cuisine: {
        id: 'cuisine',
        title: 'services.cuisine.title',
        description: 'services.cuisine.description',
        fullDescription: 'services.cuisine.fullDesc',
        benefits: [
            'services.cuisine.benefit1',
            'services.cuisine.benefit2',
            'services.cuisine.benefit3'
        ],
        process: [
            'services.cuisine.process1',
            'services.cuisine.process2',
            'services.cuisine.process3'
        ],
        benefitIcon: Home,
        processIcon: CheckCircle
    },
    canalisations: {
        id: 'canalisations',
        title: 'services.canalisations.title',
        description: 'services.canalisations.description',
        fullDescription: 'services.canalisations.fullDesc',
        benefits: [
            'services.canalisations.benefit1',
            'services.canalisations.benefit2',
            'services.canalisations.benefit3'
        ],
        process: [
            'services.canalisations.process1',
            'services.canalisations.process2',
            'services.canalisations.process3'
        ],
        benefitIcon: Camera,
        processIcon: Flame
    }
};
