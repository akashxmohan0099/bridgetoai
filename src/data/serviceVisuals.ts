import {
  PaperPlaneTilt, ChatTeardropDots, Brain, VideoCamera, PlugsConnected, ChartPieSlice,
  EnvelopeOpen, Microphone, FileText, ClipboardText, BookOpen, Megaphone,
  PhoneIncoming, Moon, ChatCircleDots, DeviceMobileSpeaker, Funnel, CalendarCheck,
  Compass, Terminal, Users, Waveform, Shield,
  PhoneCall, Subtitles, MagnifyingGlassPlus,
  ChatCircle, Target, ArrowsClockwise, Plugs, UsersFour, CalendarBlank,
  ChartBar, CurrencyDollar, TrendUp, Presentation, ChartLineUp,
} from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

export interface ServiceVisual {
  icon: PhosphorIcon;
  logos: string[];
  featureIcons: PhosphorIcon[];
}

export const serviceVisuals: Record<string, ServiceVisual> = {
  "email-automation": {
    icon: PaperPlaneTilt,
    logos: ["gmail.svg", "outlook.svg", "google-docs.svg", "grammarly.svg"],
    featureIcons: [EnvelopeOpen, Microphone, FileText, ClipboardText, BookOpen, Megaphone],
  },
  "call-receptionist": {
    icon: ChatTeardropDots,
    logos: ["whatsapp.svg", "calendly.svg", "chatgpt.svg", "intercom.svg"],
    featureIcons: [PhoneIncoming, Moon, ChatCircleDots, DeviceMobileSpeaker, Funnel, CalendarCheck],
  },
  "training-advisory": {
    icon: Brain,
    logos: ["chatgpt.svg", "claude.svg", "gemini.svg", "notion.svg"],
    featureIcons: [Compass, Terminal, Users],
  },
  "voice-records": {
    icon: VideoCamera,
    logos: ["zoom.svg", "teams.svg", "google-meet.svg", "google-docs.svg"],
    featureIcons: [PhoneCall, Waveform, Subtitles, BookOpen, MagnifyingGlassPlus, Shield],
  },
  "workflow-automation": {
    icon: PlugsConnected,
    logos: ["zapier.svg", "hubspot.svg", "slack.svg", "notion.svg"],
    featureIcons: [ChatCircle, Target, ArrowsClockwise, Plugs, UsersFour, CalendarBlank],
  },
  "business-insights": {
    icon: ChartPieSlice,
    logos: ["xero.svg", "quickbooks.svg", "google-sheets.svg", "power-bi.svg"],
    featureIcons: [ChartBar, CurrencyDollar, TrendUp, Presentation, ChartLineUp],
  },
};
