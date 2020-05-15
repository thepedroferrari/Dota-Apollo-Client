import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dotaUi: '#1B1E21',
    dotaUi2: '#2F363D',
  },
  fonts: ["sans-serif", "Roboto", "Cinzel"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }: { children: React.ReactNode; }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;



/*
wiki1
#B44335	wiki2
#CD5F51	wiki3
#FFAEA3	wiki4
#FDE6E3	wiki5
#E4C62E	wiki6
#E38800
ui1
#1B1E21	ui2
#2F363D
strength
#B9500B	agility
#167C13	intelligence
#257DAE	radiant
#598307	dire
#A83806	neutral
#434137
creep
#2277AA	creep-hero
#FFBE66	lane creep
#2277AA	jungle creep
#2277AA	ancient creep
#2277AA	summon
#FFBE66	ward
#64D74A
building
#2277AA	other
pink	courier
#FFBE66	attached
#FFE466	clone
#FFBE66
hero
#B44335	ultimate
#414141	item
#227722	npc
#2277AA	aghanims
#5B388F	talent
#BDB76B	rune
#E3B505
gold
#DAA520	armor
#B911FC	caster
#1A88FC	support
#1A88FC	artifacts
#DB9702	common
#2BAC00	basic
#FEFEFE	attributes
#FEFEFE	armaments
#FEFEFE	arcane
#FEFEFE
cos_common
#b0c3d9	cos_uncommon
#5e98d9	cos_rare
#4b69ff	cos_mythical
#8847ff	cos_legendary
#d32ce6	cos_immortal
#b28a33	cos_ancient
#eb4b4b	cos_arcana
#ade55c	cos_seasonal
#fff34f	cos_dota_plus_access
cos_dota_plus_access
cos_normal
#B2B2B2	cos_genuine
#4D7455	cos_elder
#476291	cos_unusual
#8650AC	cos_unique
#D2D2D2	cos_community
#70B04A	cos_developer
#A50F79	cos_selfmade
#70B04A	cos_customized
#00FF00	cos_inscribed
#CF6A32	cos_completed
#8650AC	cos_cursed
#8650AC	cos_heroic
#8650AC
cos_favored
#8650AC	cos_ascendant
#EB4B4B	cos_autographed
#ADE55C	cos_legacy
#FFFFFF	cos_exalted
#CCCCCC	cos_frozen
#4682B4	cos_corrupted
#A52A2A	cos_auspicious
#32CD32	cos_unusual_text
#e4ae39
*/