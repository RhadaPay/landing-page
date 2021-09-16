<template>
  <div class="page page-sections">
    <section
      id="headerSection"
      data-section="home"
      class="header-section dark-gradient fullpage-section"
    >
      <animated-background />
      <v-container
        v-if="!loading"
        class="fill-height pt-12"
        :class="{ 'align-center': phoneOnly }"
      >
        <v-slide-y-transition appear>
          <h1 class="strong-text--text">
            <animate-text
              :duration="1500"
              :stop-after="0"
              :delay="500"
              :text="$t('sections.1.title')"
            />
          </h1>
        </v-slide-y-transition>
        <v-slide-x-transition appear>
          <h2 class="text--text mt-5">
            <animate-text
              @done="showSection1Actions = true"
              :duration="2500"
              :delay="2000"
              :text="$t('sections.1.subtitle')"
            ></animate-text>
          </h2>
        </v-slide-x-transition>
        <div
          class="actions"
          :class="{
            'fade-up-off': !showSection1Actions,
            'fade-up-on': showSection1Actions,
          }"
        >
          <v-btn
            @click="navigateToLink('#aboutSection')"
            color="strong-text"
            tile
            :large="pcOnly"
            depressed
            outlined
            class="me-6"
            >{{ $t("sections.actions.about") }}</v-btn
          >
        </div>
      </v-container>

      <div class="section-scroll-icon">
        <scroll-icon @click="scrollToSection(2)" />
      </div>
    </section>
    <home-section
      id="aboutSection"
      data-section="about"
      :headline="$t('sections.about.title')"
      :subtitle="$t('sections.about.subtitle')"
      divider
    >
      <v-row>
        <v-col
          :data-aos="pcOnly ? (isRtl ? 'fade-left' : 'fade-right') : 'fade-up'"
          data-aos-duration="800"
          :cols="pcOnly ? 5 : 12"
          class=""
        >
          <v-img
            src="/assets/section1.jpg"
            contain
            width="100%"
            max-height="320"
          ></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          :data-aos="pcOnly ? (isRtl ? 'fade-right' : 'fade-left') : 'fade-up'"
          data-aos-duration="800"
          class="mt-6 mt-lg-0"
          :cols="pcOnly ? 6 : 12"
        >
          <h1 class="headline">{{ $t("sections.about.row1.title") }}</h1>
          <p
            class="medium-text text-light--text mt-6 mt-lg-8"
            :class="{ 'text-center': phoneOnly }"
          >
            {{ $t("sections.about.row1.content") }}
          </p>
        </v-col>
      </v-row>

      <v-row style="margin-top: 3.5rem" class="flex-row-reverse">
        <v-col
          :data-aos="pcOnly ? (isRtl ? 'fade-right' : 'fade-left') : 'fade-up'"
          data-aos-duration="800"
          :cols="pcOnly ? 5 : 12"
          class=""
        >
          <v-img
            src="/assets/section2.jpg"
            contain
            width="100%"
            max-height="320"
          ></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          :data-aos="pcOnly ? (isRtl ? 'fade-left' : 'fade-right') : 'fade-up'"
          data-aos-duration="800"
          class="mt-6 mt-lg-0"
          :cols="pcOnly ? 6 : 12"
        >
          <h1 class="headline">{{ $t("sections.about.row2.title") }}</h1>
          <p
            class="medium-text text-light--text mt-6 mt-lg-8"
            :class="{ 'text-center': phoneOnly }"
          >
            {{ $t("sections.about.row2.content") }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          :data-aos="pcOnly ? (isRtl ? 'fade-left' : 'fade-right') : 'fade-up'"
          data-aos-duration="800"
          :cols="pcOnly ? 5 : 12"
          class=""
        >
          <v-img
            src="/assets/section3.jpeg"
            contain
            width="100%"
            max-height="320"
          ></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          :data-aos="pcOnly ? (isRtl ? 'fade-right' : 'fade-left') : 'fade-up'"
          data-aos-duration="800"
          class="mt-6 mt-lg-0"
          :cols="pcOnly ? 6 : 12"
        >
          <h1 class="headline">{{ $t("sections.about.row3.title") }}</h1>
          <p
            class="medium-text text-light--text mt-6 mt-lg-8"
            :class="{ 'text-center': phoneOnly }"
          >
            {{ $t("sections.about.row3.content") }}
          </p>
        </v-col>
      </v-row>
    </home-section>

    <cols-section
      id="rewardTypesSection"
      headline="Reward types"
      subtitle="There are different ways in which DAO members can be rewarded for their work"
      data-section="rewardTypes"
      :cols="rewardTypesCols"
    >
    </cols-section>

    <the-footer />

    <scroll-to-top />
  </div>
</template>

<script>
// @ is an alias to /src
import "particles.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import ScrollToTop from "@/components/custom/scroll-to-top";
import AnimateText from "@/components/custom/animate-text";
import ScrollIcon from "@/components/custom/scroll-icon";
import AnimatedBackground from "@/components/custom/animated-background";
import ColsSection from "@/components/default/cols-section";
import HomeSection from "@/components/default/HomeSection";
import TheFooter from "@/components/main/TheFooter";

import GlobalComputed from "@/helpers/global-computed";
import GlobalMethods from "@/helpers/global-methods";

export default {
  name: "Home",
  components: {
    ScrollToTop,
    AnimateText,
    ColsSection,
    HomeSection,
    ScrollIcon,
    TheFooter,
    AnimatedBackground,
  },
  data() {
    return {
      showSection1Actions: false,
      currentScrollTop: 0,
    };
  },
  computed: {
    rewardTypesCols() {
      return [
        {
          color: "blue",
          icon: "mdi-trophy",
          headline: "Task Bounties",
          description:
            "Register / Manage tasks to be completed and automate the payout of the corresponding reward upon completion.",
        },
        {
          color: "deep-orange",
          icon: "mdi-account-clock",
          headline: "Role Salaries",
          description:
            "Manage roles within the DAO and payout a continously streamed salary to the holder of each role.",
        },
      ];
    },
    ...GlobalComputed,
  },
  methods: {
    scrollToSection(n) {
      let i = n - 1,
        element = document.querySelectorAll(".page-sections section")[i];
      if (element) {
        this.scrollToElement(element);
      }
    },
    scrollObserver() {
      window.addEventListener("scroll", () => {
        this.currentScrollTop = document.documentElement.scrollTop;
      });
    },
    handleScrollChange(scrollTop) {
      const sections = document.querySelectorAll(".page-sections section");
      sections.forEach((section) => {
        let offsetTop = section.offsetTop - this.navbarHeight, // decrease navbarHeight
          offsetBottom = offsetTop + section.offsetHeight;

        if (scrollTop >= offsetTop && scrollTop < offsetBottom) {
          let sectionName = section.getAttribute("data-section");
          if (sectionName) {
            this.$store.commit("SET_ACTIVE_SECTION", sectionName);
          }
          // section is visible...
          if (section.getAttribute("data-theme") === "light") {
            if (!this.lightNavbar) {
              this.$store.commit("SET_LIGHT_NAVBAR", true);
            }
          } else {
            if (this.lightNavbar) {
              this.$store.commit("SET_LIGHT_NAVBAR", false);
            }
          }
        }
      });
    },

    ...GlobalMethods,
  },
  watch: {
    currentScrollTop(top) {
      this.handleScrollChange(top);
    },
  },

  mounted() {
    this.scrollObserver();
    AOS.init({
      container: document.documentElement,
      once: true,
      easing: "ease",
    });
  },
};
</script>
<style lang="scss" scoped>
section {
  .container {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;

    &,
    * {
      z-index: 1;
    }
  }
  &.header-section {
    color: white;
  }
  h1 {
    font-size: 4rem;
    font-weight: 300;

    @media (max-width: 960px) {
      text-align: center;
      font-size: 1.7rem;
      line-height: 2.4rem;
      font-weight: 400;
    }
  }
  h2 {
    font-size: 2.75rem;
    word-break: break-word !important;
    font-weight: 200;

    @media (max-width: 960px) {
      text-align: center;
      font-size: 1.3rem;
      font-weight: 300;
    }
  }
  .actions {
    margin-top: 3rem;
    @media (max-width: 960px) {
      margin: 2rem 0;
      width: 100%;
      text-align: center;
      justify-content: center;
    }
    .v-btn {
      @media (min-width: 960px) {
        min-width: 130px;
        min-height: 45px;
      }
    }
  }
  .section-scroll-icon {
    z-index: 2;
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

<i18n>
{
    "en": {
        "sections": {
            "1": {
                "title": "Rhada",
                "subtitle": "The Easy and Flexible way to reward DAO participation"
            },
            "about": {
                "title": "About",
                "subtitle": "Incentivize and reward different types of DAO contribution",
                "row1": {
                    "title": "Community is king",
                    "content": "When asked how to measure the success of a DAO, the answer depends on whether the members of the community are meaningfully engaged, beyond just holding tokens"
                },
                "row2": {
                    "title": "Reward contribution ...",
                    "content": "Rhada allows Decentralized Organizations to clearly define what contributions will add value to their community. Then easily measure and reward those contributions."
                },
                "row3": {
                    "title": "... to build engagement",
                    "content": "By making it clear how the community can get involved, and providing flexible incentives for members to make meaningful contributions, DAOs can create effective, long term engagement with their organization"
                }
            },
            "actions": {
                "contact": "Contact Us",
                "about": "More About RhadaPay"
            }
        }
    }
}
</i18n>
