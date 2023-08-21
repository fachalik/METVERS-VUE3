<script setup lang="ts">
import {
  AboutSection,
  ExploreSection,
  FeedbackSection,
  GetStartedSection,
  HeroSection,
  InsightCard,
  WhatsNewSection,
  WorldSection
} from '@/components/Section'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <main>
    <NavbarComponent />
    <HeroSection />
    <AboutSection />
    <ExploreSection />
    <GetStartedSection />
    <WhatsNewSection />
    <WorldSection />
    <InsightCard />
    <FeedbackSection />
    <FooterComponent />
  </main>
</template>
