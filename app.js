import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { createClient } from "@supabase/supabase-js";
import {
  Search,
  Star,
  MessageSquare,
  Menu,
  Plus,
  Move,
  Check,
  X,
  Edit2,
  Trash2,
  Layout,
  History,
  ListPlus,
  Image as ImageIcon,
  ExternalLink,
  Download,
  Trophy,
  List,
  User,
  Database,
  Calculator,
  BookOpen,
  LogOut,
  RefreshCw,
  UploadCloud,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Clock,
  Coins,
  Building2,
  Cpu,
  Brain,
  MapPin,
  Link as LinkIcon,
  Tag
} from "lucide-react";
const IS_ADMIN_MODE = false;
const SUPABASE_URL = "https://uiwzuwnycuwasqjnfbdq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_cZKly5Ydf_Tzjv_cz_c3Ww_4QAdQWcs";
const WORKLOAD_STORAGE_KEY = "slot_app_workload_v1";
const STRATEGY_SHORTCUT_LINK_STORAGE_KEY = "slot_app_strategy_shortcut_links_v1";
const STRATEGY_SHORTCUT_LINK_DEFAULTS_KEY = "slot_app_strategy_shortcut_link_defaults_v1";
const DEFAULT_STRATEGY_SHORTCUT_LINKS = [
  {
    id: "default-chonborista",
    title: "\u3061\u3087\u3093\u307C\u308A\u3059\u305F",
    url: "https://chonborista.com/",
    memo: "\u30B9\u30ED\u30C3\u30C8\u89E3\u6790\u78BA\u8A8D\u7528"
  }
];
const isSupabaseConfigured = () => SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes("YOUR_") && !SUPABASE_ANON_KEY.includes("YOUR_");
const supabase = isSupabaseConfigured() ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
}) : null;
const DEFAULT_MEMO_TEMPLATE = "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n";
const markAppBooted = () => {
  window.__slotAppBooted = true;
  document.documentElement.style.background = "";
  document.body.style.background = "";
  document.body.classList.add("app-booted");
};
const BootErrorView = ({ detail = "" }) => {
  useEffect(() => {
    markAppBooted();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "min-h-[100dvh] bg-black flex items-center justify-center p-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm flex flex-col items-center", children: [
    /* @__PURE__ */ jsx("img", { src: "ruko-app-loading.png", alt: "RUKO APP", className: "w-[min(74vw,280px)] max-h-[46vh] object-contain rounded-[22px] shadow-2xl" }),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-xs font-black tracking-[0.12em] text-blue-300 mb-2", children: "RUKO APP" }),
    /* @__PURE__ */ jsx("h1", { className: "text-lg font-black text-white mb-2", children: "\u30A2\u30D7\u30EA\u306E\u8D77\u52D5\u306B\u5931\u6557\u3057\u307E\u3057\u305F" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold leading-relaxed text-gray-300 mb-5", children: "\u4E00\u6642\u7684\u306A\u901A\u4FE1\u4E0D\u826F\u304B\u3001\u30DB\u30FC\u30E0\u753B\u9762\u30A2\u30D7\u30EA\u306E\u53E4\u3044\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u539F\u56E0\u306E\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => window.location.reload(),
        className: "w-full bg-white text-neutral-950 rounded-xl py-3 font-black active:bg-gray-200",
        children: "\u518D\u8AAD\u307F\u8FBC\u307F\u3059\u308B"
      }
    ),
    detail && /* @__PURE__ */ jsx("p", { className: "mt-4 text-[11px] leading-relaxed text-gray-500 break-words", children: detail })
  ] }) });
};
class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, detail: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, detail: error?.message || String(error || "") };
  }
  componentDidCatch(error, info) {
    console.error("\u30A2\u30D7\u30EA\u63CF\u753B\u30A8\u30E9\u30FC:", error, info);
  }
  render() {
    if (this.state.hasError) return /* @__PURE__ */ jsx(BootErrorView, { detail: this.state.detail });
    return this.props.children;
  }
}
const RUKO_OFFICIAL_DATA = [
  {
    "id": "r_sengoku6",
    "name": "\u6226\u30B3\u30EC6",
    "detail": "\u793A\u5506\uFF061\u5468\u671F\u72D9\u3044",
    "tier": "A",
    "tag": "\u30BE\u30FC\u30F3, \u512A\u9047",
    "tagColor": "bg-cyan-400, bg-red-500",
    "imageUrl": "image_sengoku6.jpg",
    "link": "",
    "memo": "\u57FA\u672C\u65B9\u91DD\u{1F4A1}\n\u300C\u3068\u306B\u304B\u304F1\u5468\u671F\u6253\u3061\uFF06\u793A\u5506\u72D9\u3044\u304C\u7518\u3044\u306E\u3067\u305D\u308C\u3068\u4ED6\u6761\u4EF6\u3092\u8907\u5408\u3055\u305B\u308B\u3002\u300D\n\n\u203B\u305F\u3060\u3057\u3001\u5076\u6570AT\u3092\u72D9\u3063\u3066\u3044\u308B\u6700\u4E2D\u306B\u6B21\u56DE\u30E2\u30FC\u30C9B\u4EE5\u4E0A\u6FC3\u539A\u306B\u306A\u3063\u3066\u3082\u6368\u3066\u308B\u3002\u5947\u6570\u5468\u671F\u306E\u30E2\u30FC\u30C9B\u306B\u4FA1\u5024\u304C\u7121\u3044\u306E\u306F\u30EA\u30BB\u30C3\u30C8\u306E\u5272\u306E\u4F4E\u3055\u304B\u3089\u81EA\u660E\u306A\u306E\u3067\u3002\n\n\u30D1\u30BF\u30FC\u30F3\u2460\n\u524D\u56DE1000\uFF5E1800\u679A\u5F8C\uFF1A\u7279\u6B8A\u30E2\u30FC\u30C9\u72D9\u3044\n\u30FB\u4E0A\u8A18\u6761\u4EF6\u3092\u793A\u5506\u3092\u898B\u306A\u304C\u30891\u5468\u671F\u6253\u3064\n\u30FB\u524D\u56DE\u304C\u5929\u56FD\u5F53\u9078\u3067\u843D\u3061\u3066\u3044\u305F\u5834\u5408\u3067\u3082\u524D\u3005\u56DE\u304C1000\uFF5E1800\u679A\u5F8C\u306A\u3089\u30EB\u30FC\u30D7\u4E2D\u306E\u53EF\u80FD\u6027\u304C\u3042\u308B\u306E\u30671\u5468\u671F\u76EE\u3092\u6253\u3064\u3002\n\n\u3084\u3081\u3069\u304D\n\u30FB\u5929\u56FD\u629C\u3051\u5F8C\u3001B\u4EE5\u4E0A\u6FC3\u539A\uFF06\u9AD8\u30B7\u30CA\u30EA\u30AA\u6FC3\u539A\u3067\u306F\u306A\u3044\u5834\u5408\u3002\n\n\u30D1\u30BF\u30FC\u30F3\u2461\nAT\u5076\u6570\u56DE\u6570\u76EE\uFF1A\u30B7\u30CA\u30EA\u30AA\u6551\u6E08\u72D9\u3044\n\u30FBAT\u56DE\u6570\uFF12,4,6,8\u56DE\u76EE\u306E1\u5468\u671F\u3092\u793A\u5506\u3092\u898B\u306A\u304C\u3089\u6253\u3064\n\u203B\u305F\u3060\u3057\u305D\u308C\u307E\u3067\u306E\u5076\u6570\u56DE\u76EE\u306EAT\u304C\u4F38\u3073\u3066\u3044\u306A\u3044\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u3053\u3068\u3002\n\u753B\u50CF\u3067\u3042\u308C\u30704\u56DE\u76EE\u3067\u4F38\u3073\u3066\u3044\u308B\u306E\u30676\u56DE\u76EE\u30018\u56DE\u76EE\u306F\u6253\u3066\u306A\u3044\u3002\n\n\u3084\u3081\u3069\u304D\n\u30FB\u5076\u6570AT\u5F53\u9078\u5F8C\u3001\u5929\u56FD\u6FC3\u539A\u72B6\u614B\u3067\u306F\u306A\u3044\u5834\u5408\n\u30FB\u5929\u56FD\u629C\u3051\u5F8C\u3001B\u4EE5\u4E0A\u6FC3\u539A\uFF06\u9AD8\u30B7\u30CA\u30EA\u30AA\u6FC3\u539A\u3067\u306F\u306A\u3044\u5834\u5408\u3002"
  },
  {
    "id": "r_yabachiyo",
    "name": "\u30E4\u30D0\u30C1\u30E8",
    "detail": "\u51F9\u307F\u72D9\u3044",
    "tier": "B",
    "tag": "\u5929\u4E95",
    "tagColor": "bg-cyan-400",
    "imageUrl": "image_yabachiyo.jpg",
    "link": "",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u86797\u30E2\u30FC\u30C9\u304C\u307B\u3068\u3093\u3069\u533A\u9593\u5207\u65AD\u307E\u3067\u884C\u304F\uFF06\u5207\u65AD\u5F8C\u304C\u305D\u3093\u306A\u306B\u4F38\u3073\u306A\u3044\u3068\u3044\u3046\u4ED5\u69D8\u306A\u306E\u3067\u5DEE\u679A\u51F9\u307F\u3092\u6253\u3064\u306E\u304C\u826F\u3044\u3002\n\n\u8352\u3059\u304E\u308B\u53F0\u306A\u306E\u3067\u751F\u6D3B\u5411\u304D\u3067\u306F\u306A\u3044\u3002\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u5DEE\u679A\uFF0D2000\u679A\u4EE5\u4E0B\n\u7A4D\u6975\uFF1A7\u30C1\u30A7\uFF08\u76EE\u5B89170G\uFF5E\uFF09\n\u614E\u91CD\uFF1A13\u30C1\u30A7\uFF08\u76EE\u5B89300G\uFF5E\uFF09"
  },
  {
    "id": "r_rioace2",
    "name": "\u30EA\u30AA\u30A8\u30FC\u30B9\uFF12",
    "detail": "\u5404\u7A2E\u72D9\u3044\u76EE",
    "tier": "C",
    "tag": "\u5929\u4E95, \u30BE\u30FC\u30F3",
    "tagColor": "bg-cyan-400, bg-cyan-400",
    "imageUrl": "image_rioace2.jpg",
    "link": "",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u30EA\u30BB\u533A\u9593\u306B\u95A2\u3057\u3066\u306F\u30DC\u30CA\u30B9\u30EB\u30FC\u5929\u4E95\u304C7\u30B9\u304B\u30894\u30B9\u306B\u77ED\u7E2E\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u305D\u3053\u3092\u8EF8\u306B\n\u30FB\u901A\u5E38\u533A\u9593\u306B\u95A2\u3057\u3066\u306F\u30DE\u30AE\u30EC\u30B3\u3068\u540C\u3058\u3067AT\u95932000\u3092\u307E\u305F\u3050\u3068\u7A62\u308C\u7372\u5F97\u304C\u5927\u5E45\u306B\u3042\u304C\u308B\u306E\u3067\u305D\u308C\u3092\u8EF8\u306B\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30FB\u30EA\u30BB\u2192\u30B9\u30EB\u30FC\u5929\u4E95\u3092\u8996\u91CE\u306B\n0\u30B9\u2192220G\uFF5E\u203B\u5929\u4E95500G\uFF0B\u03B1\n1\uFF5E2\u30B9\u2192450G\uFF5E\u203B\u5929\u4E95750G\uFF0B\u03B1\n3\u30B9\u2192320G\uFF5E\n4\u30B9\u21920G\uFF5E\n\n\u30FB\u30EA\u30BB\u4EE5\u5916\u2192AT\u95932000\u8E0F\u3081\u308B\u304B\u3092\u8996\u91CE\u306B\n\u30B9\u30EB\u30FC\u4E0D\u554F:AT\u95932000G\uFF5EAT\u307E\u3067\n6\u30B9:320G\uFF5E\n7\u30B9:0G\uFF5E\n\n\u30FB\u30BE\u30FC\u30F3\u72D9\u3044\n290\uFF5E300\u30BE\u30FC\u30F3\n\n\u30FB\u30A8\u30FC\u30B9\u30E2\u30FC\u30C9\u72D9\u3044\n\u30C6\u30A4\u30EB/\u30A2\u30EA\u30B9/\u30CE\u30EF\u30FC\u30EB\n\uFF10G\uFF5E\n\u30CA\u30F4\u30A3/\u30F4\u30A3\u30F4\u30A3\u30A2\u30F3\n190G\uFF5E\n\n\u30FB\u30E4\u30E1\u6642: \u5373\u30E4\u30E1\u63A8\u5968"
  },
  {
    "id": "r_bio_re3",
    "name": "\u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C9RE:3",
    "detail": "\u5404\u7A2E\u72D9\u3044\u76EE",
    "tier": "C",
    "tag": "\u5929\u4E95",
    "tagColor": "bg-cyan-400",
    "imageUrl": "image_biore3.jpg",
    "link": "",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u9023\u8358\u6700\u5F8C\u306E1RB\u3092\u30B9\u30EB\u30FC\u30AB\u30A6\u30F3\u30C8\u3057\u306A\u3044\u3088\u3046\u6CE8\u610F\n\u30FB\u30B9\u30EB\u30FC\u3067\u72D9\u3046\u3088\u308AAT\u9593\u3067\u72D9\u3046\u3053\u3068\u306E\u304C\u591A\u305D\u3046\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\nCZ\u30DD\u30A4\u30F3\u30C8100\u4EE5\u4E0B\u60F3\u5B9A\n\u30FB\u30EA\u30BB\nAT\u9593230G\uFF5E\u203B\u5929\u4E95650G\n\u30FB\u30EA\u30BB\u4EE5\u5916\nAT\u9593570G\uFF5E\u203B\u5929\u4E951000G\n\n\u30FB\u30B9\u30EB\u30FC\u5929\u4E95\u72D9\u3044\n4\u30B9\u30EB\u30FC\uFF5E\u203B\u5929\u4E956\u30B9\u30EB\u30FC\n\n\u30FB\u4E0A\u4F4D\u5F8C0\u30B9NE\u30DD\u30A4\u30F3\u30C8\u72D9\u3044\n\uFF10G\uFF5E\u203BNE\u30DD\u30A4\u30F3\u30C8\u5929\u4E95100pt\n\u5B9FG\u3068\u6DB2\u6676G\u305A\u308C\u308B\u306E\u3067\u5224\u5225\u53EF\u80FD"
  },
  {
    "id": "r_godkiseki",
    "name": "L\u30B4\u30C3\u30C9\u8ECC\u8DE1",
    "detail": "\u512A\u9047\u5929\u4E95\u72D9\u3044",
    "tier": "A",
    "tag": "\u512A\u9047, \u5929\u4E95",
    "tagColor": "bg-red-500, bg-cyan-400",
    "imageUrl": "image_godkiseki.jpg",
    "link": "https://note.com/ruko7613/n/n1c7e8a0e9876",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u304B\u3050\u3084\u3068\u540C\u3058\u3088\u3046\u306A\u512A\u9047\u72D9\u3044\u304C\u53EF\u80FD\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30FB\u8A18\u4E8B\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044"
  },
  {
    "id": "r_yoshimune",
    "name": "\u771F\u6253\u5409\u5B97",
    "detail": "\u5404\u7A2E\u72D9\u3044\u76EE",
    "tier": "C",
    "tag": "\u5929\u4E95, \u30BE\u30FC\u30F3",
    "tagColor": "bg-cyan-400, bg-cyan-400",
    "imageUrl": "image_yoshimune.jpg",
    "link": "https://note.com/ruko7613/n/n22deefaed744#45ab1b79-c8ef-47f9-a637-f0f0dbcf5fde",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u771FBB\uFF08\u4E0A\u4F4D\uFF09\u5F8C\u306E\u77ED\u7E2E\u5929\u4E95\u72D9\u3044\u304C\u62FE\u3048\u308B\u304C\u3001\u5C65\u6B74\u8AAD\u307F\u304C\u7C21\u5358\u306A\u306E\u3067\u4ECA\u3060\u3051\u3060\u3068\u601D\u3046\n\u2192\u5DEE\u679A1000\u679A\u4EE5\u4E0B\u306E\u72B6\u614B\u304B\u3089\u6253\u3061\u59CB\u3081\u306A\u3044\u3068\u51B7\u9047\u3072\u3069\u3044\u306E\u3067\u6CE8\u610F\n\u30FB\u5947\u6570\u30DD\u30A4\u30F3\u30C8\u3067\u5468\u671F\u5230\u9054\u5F8C\u306F200pt\u4EE5\u5185\u3067\u5468\u671F\u5230\u9054\u306B\u671F\u5F85\u3067\u304D\u308B\u306E\u3067\u7D9A\u884C\u3067\u304D\u308B\n\u30FB2\u65E5\u76EE\u306B\u7A3C\u50CD\u98DB\u3093\u3067\u3044\u305F\u306E\u3067\u6253\u3066\u308B\u306E\u4ECA\u3060\u3051\u3060\u3068\u601D\u3046\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30FBAT\u9593\uFF08CZ\u304C\u9032\u3093\u3067\u3044\u306A\u3044\u5834\u5408\uFF09\u203B1500G\u5929\u4E95\n810G\uFF5E\n\u30FB\u30EA\u30BBAT\u9593\uFF08CZ\u304C\u9032\u3093\u3067\u3044\u306A\u3044\u5834\u5408\uFF09\u203B999G\u5929\u4E95\n310G\uFF5E\n\u30FB\u771FBB\u5F8CAT\u9593\u203B700G\u5929\u4E95\n\u5DEE\u679A1000\u679A\u4EE5\u4E0B\n0G\uFF5E\n\u5DEE\u679A1001\u679A\u4EE5\u4E0A\n290G\uFF5E\n\n\u30FBCZ\u9593\uFF081000G\u5929\u4E95\u3082\u3057\u304F\u306F6\u5468\u671F\uFF09\n620G\uFF5E\u3082\u3057\u304F\u306F5\u5468\u671F0pt\uFF5E\n\n\u30FB\u30BE\u30FC\u30F3\u72D9\u3044\n\u524D\u56DE\u5947\u6570pt\u5468\u671F\u5230\u9054\u5F8C\n\u2192\u5F53\u8A72\u5468\u671F\u6253\u3064\uFF08\u591C\u56DE\u308AD\u72D9\u3044\uFF09"
  },
  {
    "id": "r_yoshimune2",
    "name": "\u771F\u6253\u5409\u5B97",
    "detail": "\u30E1\u30CB\u30E5\u30FC\u753B\u9762\u72D9\u3044",
    "tier": "C",
    "tag": "\u793A\u5506\u72D9\u3044",
    "tagColor": "bg-purple-500",
    "imageUrl": "image_yoshimune.jpg",
    "link": "https://note.com/ruko7613/n/n22deefaed744#45ab1b79-c8ef-47f9-a637-f0f0dbcf5fde",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u73FE\u6642\u70B9\u3067\u306F\u8A73\u7D30\u304C\u51FA\u3066\u3044\u306A\u3044\u306E\u3067\u30E9\u30A4\u30D0\u30EB\u304C\u5C11\u306A\u3044\n\u30FB\u5468\u671F\u304C\u5909\u308F\u308B\u3068\u30E1\u30CB\u30E5\u30FC\u753B\u9762\u3082\u5909\u308F\u308B\u3053\u3068\u304C\u3042\u308B\u306E\u3067\u8981\u30C1\u30A7\u30C3\u30AF\u683C\u4E0A\u3052\u306F\u3042\u308B\u304C\u683C\u4E0B\u3052\u306F\u306A\u3044\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30E1\u30CB\u30E5\u30FC\u753B\u9762\u306F\u80CC\u666F\u3067\u5F37\u5F31\u304C\u5206\u304B\u308A\u305D\u3046\n\u767D\u9ED2\uFF1C\u9752\uFF1C\u7DD1\uFF1C\u30D4\u30F3\u30AF\uFF1F\n\u30FB1\u5468\u671F\u76EE\u306B\u7DD1\u51FA\u3066\u5929\u4E95\u8A00\u3063\u305F\u306E\u3067B\u4EE5\u4E0A\u3068\u304B\u3067\u306F\u7121\u3055\u305D\u3046\n\u30FB\u30D4\u30F3\u30AF\u306F\u5F53\u8A72\u5468\u671F\u3067\u5F53\u305F\u3063\u305F\n\n\u30FB\u80CC\u666F\u7DD1\n3\u5468\u671F300pt\uFF5E\n\u30FB\u80CC\u666F\u30D4\u30F3\u30AF\n\u5F53\u8A72CZ\u307E\u3067\n\n\u9752\u306F\u6253\u305F\u306A\u3044"
  },
  {
    "id": "r_yoshimune3",
    "name": "\u771F\u6253\u5409\u5B97",
    "detail": "\u5929\u56FD\u72D9\u3044",
    "tier": "A",
    "tag": "\u30BE\u30FC\u30F3",
    "tagColor": "bg-cyan-400",
    "imageUrl": "image_yoshimune.jpg",
    "link": "",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u5DEE\u679A-3000\u679A\u4EE5\u4E0B\u306E1\u5468\u671F\u3092\u6253\u3066\u308B\u3002\n\u2192\u5DEE\u679A\u30DE\u30A4\u30CA\u30B9\u306E\u969B\u306B\uFF11G\u9023\u304C\u7372\u5F97\u3057\u3084\u3059\u3044\u306E\u30671\u56DE\u76EE\u306EBB\u5F8C\u306B\u307E\u3060\u5DEE\u679A\u30DE\u30A4\u30CA\u30B9\u306A\u3053\u3068\u306B\u671F\u5F85\u3067\u304D\u308B\u3050\u3089\u3044\u51F9\u3093\u3067\u308B\u3053\u3068\u304C\u6761\u4EF6\n\n\u30FB\u5929\u56FD\u793A\u5506\u304C\u5168\u7136\u3067\u306A\u3044\u306E\u3067\u524D\u4EFB\u8005\u6C17\u306B\u3057\u306A\u304F\u3066\u3044\u3044\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u5DEE\u679A\uFF0D3000\u679A\u4EE5\u4E0B\nAT\u5F8C0G\uFF5E1\u5468\u671F"
  },
  {
    "id": "r_kabaneri",
    "name": "\u30AB\u30D0\u30CD\u30EA\u6D77\u9580\u6C7A\u6226",
    "detail": "1\u5468\u671F\u975E\u5F53\u9078\u5F8C\u306E2\u5468\u671F\u72D9\u3044",
    "tier": "B",
    "tag": "\u30BE\u30FC\u30F3",
    "tagColor": "bg-cyan-400",
    "imageUrl": "image_kabaneri.jpg",
    "link": "https://note.com/ruko7613/n/n0bb5b38a22c3",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB1\u5468\u671F\u6EDE\u5728\u4E2D\u306FRB\u6BD4\u7387\u304C\u9AD8\u304F\u3066\u72D9\u3048\u306A\u3044\u306E\u30672\u5468\u671F\u306E\u30BE\u30FC\u30F3\u72D9\u3044\u304C\u672C\u547D\n\u30FB1\u5468\u671F\u3067RB\u304C\u5F53\u9078\u3057\u3066\u3044\u306A\u3044\u5834\u54082\u5468\u671F\u306E\u30BE\u30FC\u30F3\u5F53\u9078\u7387\u304C\u9AD8\u304F\u306A\u308B\u306E\u3067\u305D\u308C\u3092\u72D9\u3046\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n2\u5468\u671F\u6EDE\u5728\u4E2D\n1\u5468\u671FRB\u975E\u5F53\u9078\uFF1A180\uFF5E2\u5468\u671F\u30BE\u30FC\u30F3\u5230\u9054\u307E\u3067\n\u203B\u9014\u4E2D\u3067CZ\u304B\u3089RB\u5F53\u9078\u3057\u3066\u3082\u30BE\u30FC\u30F3\u629C\u3051\u307E\u3067\u306F\u6253\u3061\u5207\u308B"
  },
  {
    "id": "r_kabaneri2",
    "name": "\u30AB\u30D0\u30CD\u30EA\u6D77\u9580\u6C7A\u6226",
    "detail": "\u4E0A\u4F4DST\u30B9\u30BF\u30FC\u30C8\u72D9\u3044",
    "tier": "B",
    "tag": "\u5929\u4E95",
    "tagColor": "bg-cyan-400",
    "imageUrl": "image_kabaneri2.jpg",
    "link": "https://note.com/ruko7613/n/n74858edb21f3",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u6700\u8FD1\u6D41\u884C\u308A\u306E\u30E2\u30F3\u30AD\u30FC\u578B\u306E\u5468\u671F\u53F0\u306A\u306E\u3067\u540C\u3058\u3088\u3046\u306B\u72D9\u3046\u3002\uFF08\u793A\u5506\u306F\u96C6\u8A08\u3057\u307E\u3059\uFF09\n\u30FB6G\u4EE5\u4E0A\u306EAT\u4FE1\u53F7\u304C\u6D77\u9580\u56DE\u60F3\u82E5\u3057\u304F\u306FED\u30DC\u30FC\u30CA\u30B9\n\u30FB6G\u4EE5\u4E0A\u306E\u4FE1\u53F7\u304B\u30891300\u679A\u4EE5\u4E0A\u7372\u5F97\u5F8C\u306E\u521D\u5F53\u305F\u308A\u3067\u4E0A\u4F4DST\u304C\u51FA\u3066\u304D\u3084\u3059\u3044\u3002\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u524D\u56DEAT\u4E2D\u306B\uFF16g\u4EE5\u4E0A\u306E\u4FE1\u53F7\uFF0B1300\u679A\u4EE5\u4E0A\u51FA\u3066\u3044\u305F\u5834\u5408\n0G~\n\uFF08\u66AB\u5B9A\u7248\uFF09\n\u524D\u56DE\u771F\u666F\u4E4B\u4EE5\u4E0A\u3060\u3063\u305F\u5834\u5408\n0G~"
  },
  {
    "id": "r4",
    "name": "\u5317\u6597\u8EE2\u751F\uFF12",
    "detail": "\u30B7\u30E3\u30C3\u30BF\u30FC\u5224\u5225",
    "tier": "S",
    "tag": "\u30EA\u30BB, \u30BE\u30FC\u30F3, \u5DEE\u679A",
    "tagColor": "bg-orange-400, bg-cyan-400, bg-yellow-400",
    "imageUrl": "image_tensei2.jpg",
    "link": "https://note.com/ruko7613/n/n8d8feeb888c9",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u30BE\u30FC\u30F3\u5916\u3067\u306E\u30D5\u30A7\u30A4\u30AF\u524D\u5146\uFF08\u4E3B\u306BG\u6570\u524D\u5146\uFF09\u767A\u751F\u3067896\u3042\u3079\u3057\u4EE5\u5185\u306E\u5F53\u9078\u6FC3\u539A\n40\u3001168\u3001296\u306E\u524D\u5F8C\uFF18G\u3067G\u6570\u524D\u5146\u304C\u6765\u308B\u304B\u3067\u5224\u5225\u3059\u308B\u306E\u304C\u57FA\u672C\u3060\u304C\u3001\u9014\u4E2D\u3067\u6368\u3066\u3089\u308C\u3066\u3044\u308B\u53F0\u306F\u3059\u3067\u306B\u5224\u5225\u6E08\u307F\u306E\u53EF\u80FD\u6027\u9AD8\u304F\u3066\u89E6\u308C\u306A\u3044\u306E\u3067\u5B9F\u8CEA40\u3042\u3079\u3057\u3067\u5224\u5225\u3059\u308B\u3057\u304B\u306A\u3044\u3002\n\u30FB\u30EA\u30BB\u3067\u306F\uFF10\uFF5E\uFF13\uFF10\u3042\u3079\u3057\u77ED\u7E2E\u3055\u308C\u308B\u304C\uFF12\uFF10\u77ED\u7E2E\u306E\u9078\u629E\u7387\u304C\u6700\u3082\u9AD8\u3044\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u203B\u30EA\u30BB\u3068AT\u5F8C\u5373\u3084\u3081\u4EE5\u5916\u3059\u3079\u3066\u62FE\u3048\u307E\u305B\u3093\n\uFF10G\uFF5E\uFF14\uFF11\u3042\u3079\u3057\u307E\u3067\u6253\u3064\n\u2460G\u6570\u524D\u5146\u3042\u308A\u2192AT\u307E\u3067\n\u2461G\u6570\u524D\u5146\u306A\u3057\u2192\u3084\u3081\n\n\u5929\u7834\u306740\u3042\u3079\u3057\u4ED8\u8FD1\u3092\u98DB\u3070\u3057\u3066\u3057\u307E\u3063\u305F\u5834\u5408\u306F\u307B\u304B\u306E\u30BE\u30FC\u30F3\u5916\u524D\u5146\u3067\u5224\u5225\u3057\u3066\u304B\u3089\u3084\u3081\u3002\n\nAT\u5F8C\u306B\u95A2\u3057\u3066\u306F\u5DEE\u679A\uFF0D\uFF11\uFF10\uFF10\uFF10\u679A\u4EE5\u4E0A\u51F9\u3093\u3067\u3044\u306A\u3051\u308C\u3070\u540C\u69D8\u306B\u6253\u3064\u3002\n\u5DEE\u679A\u5207\u65AD\u304C\u5927\u4E8B\u306A\u53F0\u306A\u306E\u3067\u51F9\u307E\u306A\u3044\u9650\u308A\u306F\u8FFD\u3046\u3053\u3068\u3002"
  },
  {
    "id": "r_ghoul",
    "name": "\u6771\u4EAC\u55B0\u7A2E",
    "detail": "\u30EA\u30BB\u30C3\u30C8\uFF10G\uFF5E\uFF06\u793A\u5506\u6253\u3061\u5206\u3051",
    "tier": "S",
    "tag": "\u30EA\u30BB",
    "tagColor": "bg-orange-400",
    "imageUrl": "image_ghoul.jpg",
    "link": "https://note.com/ruko7613/n/na6a453efe232",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u73FE\u6642\u70B9\u306E\u30EA\u30BB\u30C3\u30C8\u72D9\u3044\u3067\u306F\u4E00\u756A\u512A\u5148\u5EA6\u9AD8\u3044\u3002\n\u2192\u793A\u5506\u7D9A\u884C\u3068\u30D9\u30FC\u30B9\u8FBC\u307F\u3067108\uFF05\n\u30FB\u306A\u308B\u3079\u304F\u5468\u308A\u306E\u793A\u5506\u3082\u898B\u306A\u304C\u3089\u3053\u306A\u3059\u3088\u3046\u306B\u3002\n\u2192\u304A\u5E74\u5BC4\u308A\u3088\u308A\u82E5\u8005\u306E\u304C1\u30B9\u30E4\u30E1\u3057\u304C\u3061\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30EA\u30BB\uFF10G\u304B\u3089\u6253\u3061\u3001CZ\u30B9\u30EB\u30FC\u6642\u306F\u793A\u5506\u3067\u62BC\u3057\u5F15\u304D\u3002\n\u2606CZ\u5931\u6557\u6642\u306E\u30D7\u30C3\u30B7\u30E5\n\u30FB\u5929\u56FD\u6E96\u5099\u4EE5\u4E0A\u306A\u3089\u7D9A\u884C\n\n\u2606CZ\u5931\u6557\u5F8C\uFF11G\u76EE\u306E\u30A2\u30A4\u30AD\u30E3\u30C3\u30C1\n\u30FB\u91D1\u6728\u306A\u3089100\u30BE\u30FC\u30F3\u307E\u3067\u6253\u3066\u308B\n\u203B\u91D1\u6728\u304CAor\u5929\u56FD\u793A\u5506\u3067\u671D\uFF12\u3067A\u306B\u79FB\u884C\u3059\u308B\u53EF\u80FD\u6027\u304C\u4F4E\u3044\u305F\u3081\u5B9F\u8CEA\u5929\u56FD\u793A\u5506\u3068\u306A\u3063\u3066\u3044\u308B\n\n\u305D\u306E\u5F8C\u306F100\u30BE\u30FC\u30F3\u5F53\u9078\xD7\u91D1\u6728\u30A2\u30A4\u30AD\u30E3\u30C3\u30C1\u304C\u7D9A\u304F\u9650\u308A\u30BE\u30FC\u30F3\u72D9\u3044\u3092\u5B9F\u884C\u3059\u308B\u3002\n\n\u30FB\u3084\u3081\u3069\u304D\nAT\u5F8C\u306F\u5F15\u304D\u623B\u305715G\u307E\u3067\u898B\u3066\u3084\u3081"
  },
  {
    "id": "r2",
    "name": "\u6771\u4EAC\u55B0\u7A2E",
    "detail": "\u7A62\u308C\uFF08\u5185\u90E8\u30DD\u30A4\u30F3\u30C8\uFF09\uFF06\u30E2\u30FC\u30C9\u770B\u7834",
    "tier": "A",
    "tag": "\u7A62\u308C",
    "tagColor": "bg-purple-500",
    "imageUrl": "image_ghoul.jpg",
    "link": "https://note.com/ruko7613/n/n039708015839",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u5185\u90E8\u30DD\u30A4\u30F3\u30C8\u3092\u6B63\u78BA\u306B\u5C65\u6B74\u8AAD\u307F\u3067\u304D\u3066\u3044\u308B\u4EBA\u304C\u5C11\u306A\u304F\u30E9\u30A4\u30D0\u30EB\u304C\u3042\u307E\u308A\u3044\u306A\u3044\u306E\u3067\u534A\u5E74\u4EE5\u4E0A\u305A\u3063\u3068\u62FE\u3048\u3066\u3044\u308B\u3002\n\n\u30FB\u524D\u56DEAT\u524D\u306ECZ\u5F53\u9078\u30B2\u30FC\u30E0\u3084\u5F53\u8A72\u793A\u5506\u306A\u3069\u30DC\u30FC\u30C0\u30FC\u8ABF\u6574\u8981\u7D20\u591A\u3044\u306E\u3067\u7D30\u304B\u3044\u3068\u3053\u308D\u306F\u6253\u611F\u3092\u8EAB\u306B\u7740\u3051\u3066\u5224\u65AD\u3059\u308B\u3088\u3046\u306B\u3002\n\n\u30FB\u7A62\u308C\u306E\u958B\u653E\u671F\u5F85\u5EA6\u306F\n9pt\uFF5E12pt\u304C\u540420\uFF05\u524D\u5F8C\n8pt\u306813pt\u304C\u540410\uFF05\u524D\u5F8C\n7pt\u4EE5\u4E0B\u306F\u307B\u307C0\uFF05\n13pt\u4EE5\u964D\u3082\u307B\u307C\u306A\u304F20pt\u3050\u3089\u3044\u307E\u3067\u6765\u308B\u3068\u305F\u307E\u306B\u958B\u653E\u3059\u308B\u2190\u72D9\u3048\u306F\u3057\u306A\u3044\n\n\u30FB\u5DEE\u679A\u306F1500\u679A\u4EE5\u4E0A\u3078\u3053\u307F\u304C\u30DC\u30FC\u30C0\u30FC\u51F9\u3093\u3067\u3044\u308C\u3070\u3044\u308B\u307B\u3069\u5F37\u3044\n\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\nAT\u99C6\u3051\u629C\u3051\u5F8C;\u5185\u90E8\u30DD\u30A4\u30F3\u30C89pt\u82E5\u3057\u304F\u306F10pt\uFF5E\n\n\u203B\u89E3\u653E\u306E\u632F\u308A\u5206\u3051\u304C9pt\uFF5E12pt\u306B\u56FA\u307E\u3063\u3066\u3044\u308B\u306E\u3067\u81EA\u5206\u3067CZ\u3092\u30B9\u30EB\u30FC\u3059\u308B\u305F\u3073\u306B\u62BD\u9078\u3092\u53D7\u3051\u3089\u308C\u308B9pt\u306A\u3069\u304C\u5F37\u3044\u306E\u3067\u3042\u3063\u306612pt\u304B\u3089\u3060\u306812pt\u306E\u306B\u3057\u304B\u62BD\u9078\u3092\u53D7\u3051\u3089\u308C\u306A\u3044\u306E\u3067\u5F31\u3044\u3002\n\n\u260650G\u793A\u5506\n\u30FB2.4.6\u2192\u5373\u3084\u3081\n\u30FB\u55B0\u3046\u304B\u55B0\u308F\u308C\u308B\u304B\u2192\u5929\u56FD\u30BE\u30FC\u30F3\u629C\u3051\u3084\u3081\n\u30FB\u30C7\u30D5\u30A9\u30EB\u30C8\u2192\u7D9A\u884C\n\u2606\u524D\u56DE\u30E2\u30FC\u30C9\nAT\u5F8C\u3082\u524D\u56DE\u30E2\u30FC\u30C9\u9AD8\u3044\u5F8C\u306E\u65B9\u304C\u9AD8\u30E2\u30FC\u30C9\u6765\u3084\u3059\u3044\u306E\u3067\u3001\u524D\u56DEAT\u524D\u304CCZ\u5F53\u9078300G\u4EE5\u4E0B\u306E\u3082\u306E\u306E\u65B9\u304C\u5F37\u3044\u3002"
  },
  {
    "id": "r6",
    "name": "\u30F4\u30F4\u30F4\uFF12",
    "detail": "\u512A\u9047\u30E2\u30FC\u30C9\u72D9\u3044",
    "tier": "C",
    "tag": "\u512A\u9047",
    "tagColor": "bg-red-500",
    "imageUrl": "image_vvv2.jpg",
    "link": "https://note.com/ruko7613/n/na215bab10457",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u3082\u3046\u3042\u307E\u308A\u62FE\u3048\u308B\u6A5F\u4F1A\u306F\u7121\u304F\u306A\u3063\u3066\u3057\u307E\u3063\u305F\u304C\u62FE\u3048\u305F\u6642\u306E\u30EA\u30BF\u30FC\u30F3\u304C\u3067\u304B\u3059\u304E\u308B\u306E\u3067\u5FC5\u305A\u3053\u307E\u3081\u306B\u5CF6\u30C1\u30A7\u30C3\u30AF\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u8A18\u4E8B\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044"
  },
  {
    "id": "r8",
    "name": "\u30B4\u30C3\u30C9\u30A4\u30FC\u5915\u30FC",
    "detail": "\u5DEE\u679A\u72D9\u3044",
    "tier": "C",
    "tag": "\u5DEE\u679A",
    "tagColor": "bg-yellow-400",
    "imageUrl": "image_godeater.jpg",
    "link": "",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u3044\u307E\u3060\u306B\u30B3\u30F3\u30B9\u30BF\u30F3\u30C8\u306B\u62FE\u3048\u308B\n\u30FB\u7279\u306B\u9732\u9AA8\u306A\u51B7\u9047\u6319\u52D5\u3082\u306A\u304F\u3001\u5207\u65AD\u30E9\u30A4\u30F3\u4ED8\u8FD1\u3092\u9577\u304F\u6253\u3066\u308B\u5C55\u958B\u306B\u3082\u306A\u308A\u3084\u3059\u304F\u4ED5\u4E8B\u91CF\u7A4D\u307F\u3084\u3059\u3044\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30FB\u4E0A\u4F4D\u5F8C\u5929\u4E95\u72D9\u3044\n\u5DEE\u679A\uFF0B1500\u679A\u4EE5\u4E0A\u3000\n\uFF10G\uFF5E\n\u5DEE\u679A\uFF0B1000\u679A\u4EE5\u4E0A\n100\u30BE\u30FC\u30F3\u629C\u3051\uFF5E\n\n\u30FB\u975E\u77ED\u7E2E\u5F8C\u30BE\u30FC\u30F3\u72D9\u3044\n\u5DEE\u679A\uFF0B1000\u679A\u4EE5\u4E0A\n\uFF10G\uFF5E100\u30BE\u30FC\u30F3\u307E\u3067\n\u2606\u30BB\u30EA\u30D5\u793A\u5506\n300\u30BE\u30FC\u30F3\u3067\u5F53\u305F\u308B\u5834\u5408\u306F\u30EC\u30F3\u306E\u30BB\u30EA\u30D5\u306A\u3069\u793A\u5506\u304C\u983B\u767A\u3059\u308B\u306E\u3067\u3053\u306E\u969B\u306F100\u629C\u3051\u304B\u3089300\u30BE\u30FC\u30F3\u307E\u3067\u6253\u3064"
  },
  {
    "id": "r10",
    "name": "\u653B\u6BBB\u6A5F\u52D5\u968A",
    "detail": "\u512A\u9047\u72D9\u3044",
    "tier": "C",
    "tag": "\u512A\u9047",
    "tagColor": "bg-red-500",
    "imageUrl": "image_kidoutai.jpg",
    "link": "https://note.com/ruko7613/n/n1b6fdee4cd68",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u512A\u9047\u304C\u3042\u308B\u306E\u3067\u4ECA\u306F\u62FE\u3048\u308B\u304C\u53F0\u6570\u3082\u5C11\u306A\u304F\u5C3B\u3059\u307C\u307F\u3057\u3066\u3044\u304D\u305D\u3046\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u8A18\u4E8B\u306E\u65B9\u304B\u3089\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002"
  },
  {
    "id": "r12",
    "name": "\u304B\u3050\u3084\u69D8",
    "detail": "\u512A\u9047\u72D9\u3044",
    "tier": "C",
    "tag": "\u512A\u9047",
    "tagColor": "bg-red-500",
    "imageUrl": "image_kaguya.jpg",
    "link": "https://note.com/ruko7613/n/nd89bca90807e",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FBSANKYO\u306E\u533A\u9593\u7BA1\u7406\u304C\u9732\u9AA8\u306B\u8868\u308C\u3066\u3044\u308B\u53F0\u306A\u306E\u3067\u512A\u9047\u72D9\u3044\u304C\u52B9\u304F\n\u30FB\u512A\u9047\u3060\u304B\u3089\u3068\u3044\u3063\u3066\u3064\u3063\u3071\u3059\u308B\u306E\u3067\u306F\u30DC\u30FC\u30C0\u30FC\u3092\u4E0B\u3052\u3066\u30D2\u30C3\u30C8\uFF06\u30A2\u30A6\u30A7\u30A4\u3059\u308B\u3053\u3068\n\u2192\u5317\u6597\u3084\u30C8\u30E9\u30D6\u30EB\u304C\u512A\u9047\u3060\u304B\u3089\u3068\u8A00\u3063\u3066\uFF10\u304B\u3089\u6253\u305F\u306A\u3044\u306E\u3068\u540C\u3058\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30FB\u524D\u56DE\u3001\u524D\u3005\u56DE\u304CBB3\uFF5E\uFF14\u9023\n\u5F53\u8A72\u30C1\u30E3\u30F3\u30B9\u76EE8\u56DE\uFF5E\n\u203BBB\u306E\u5F37\u3055\uFF11G\u9023\uFF1E\uFF1E\uFF1E\u5F15\u304D\u623B\u3057\n\n\u305D\u306E\u4ED6\u512A\u9047\u6319\u52D5\u306A\u3069\u8A73\u3057\u3044\u5185\u5BB9\u306F\u8A18\u4E8B\u53C2\u7167\n\n\u30FB\u3084\u3081\u3069\u304D\nCZ\u5931\u6557\u6642\u306F\u5373\u3084\u3081\u3002\n\u512A\u9047\u72D9\u3044\u306E\u5834\u5408\u30DC\u30CA\u5F8C\u5F15\u304D\u623B\u3057\u306F\u57FA\u672C\u7684\u306B\u5168\u3066\u898B\u308B\u3002"
  },
  {
    "id": "r13",
    "name": "\u708E\u708E\u30CE\u6D88\u9632\u968A",
    "detail": "\u30B9\u30EB\u30FC\u72D9\u3044",
    "tier": "C",
    "tag": "\u30B9\u30EB\u30FC",
    "tagColor": "bg-orange-400",
    "imageUrl": "image_enen2.jpg",
    "link": "",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u708E\u708E\u30EB\u30FC\u30D7\u9593\u5929\u4E952000G\u3068\u306F\u5225\u306B\u30B9\u30EB\u30FC\u5929\u4E95\u304C\u3042\u308B\u306E\u3067\u305D\u3061\u3089\u3082\u899A\u3048\u3066\u304A\u304F\n\u203B5\u30B9\u30EB\u30FC\u5F8C\u306E\u6B21\u304C\u30A8\u30D4\u30BD\u30FC\u30C9\u30DC\u30FC\u30CA\u30B9\n\u30FB\u539F\u4F5C\u30D5\u30A1\u30F3\u306E\u591A\u3044\u6A5F\u7A2E\u306A\u306E\u3067\u30B9\u30ED\u30C3\u30C8\u8A73\u3057\u304F\u306A\u3044\u4EBA\u3082\u6253\u3064\u5834\u5408\u304C\u3042\u308B\u306E\u3067\u62FE\u3044\u3084\u3059\u3044\u90E8\u985E\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30FB3\u30B9\u30EB\u30FC\u4EE5\u4E0B\n\u30EB\u30FC\u30D7\u95931200G\uFF5E\n\u30FB4\u30B9\u30EB\u30FC\u4EE5\u964D\n\u30EB\u30FC\u30D7\u9593\u554F\u308F\u305A\u5F53\u8A72\uFF10G\uFF5E\n\n\u30FB\u3084\u3081\u3069\u304D\n\u30B9\u30C8\u30C3\u30AF\u6F5C\u4F0F\u78BA\u8A8D\u3057\u3066\u3084\u3081"
  },
  {
    "id": "r14",
    "name": "\u30A2\u30BA\u30FC\u30EB\u30EC\u30FC\u30F3",
    "detail": "\u512A\u9047\u72D9\u3044",
    "tier": "C",
    "tag": "\u512A\u9047",
    "tagColor": "bg-red-500",
    "imageUrl": "image_azul.jpg",
    "link": "https://note.com/ruko7613/n/n78bb47200866",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB2000\u679A\u4EE5\u4E0A\u51F9\u307F\u6642\u306B0\u30B9\u5929\u4E95\u9078\u629E\u7387\u4E0A\u6607\n\u30FB\u30B7\u30F3\u30D7\u30EB\u306A\u304C\u3089\u30E9\u30A4\u30D0\u30EB\u5C11\u306A\u304F\u3066\u62FE\u3048\u308B\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30FB\u5DEE\u679A\u30DE\u30A4\u30CA\u30B92000\u679A\u4EE5\u4E0A\nAT\u5F8C0\u30B9\u3092\u30DC\u30FC\u30CA\u30B9\u5F53\u9078\u307E\u3067"
  },
  {
    "id": "r15",
    "name": "\u30E2\u30F3\u30AD\u30FC\u30BF\u30FC\u30F3",
    "detail": "\u30EA\u30BB\u30C3\u30C8\u72D9\u3044",
    "tier": "C",
    "tag": "\u30EA\u30BB",
    "tagColor": "bg-orange-400",
    "imageUrl": "image_monkey.jpg",
    "link": "",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u30EA\u30BB\u30C3\u30C8\u6642\u306FAT\u307E\u3067\u6253\u3063\u3066\u3082102\uFF05\u306F\u51FA\u308B\u304C\u30011\u5468\u671F\u629C\u3051\u307E\u3067\u306B\u793A\u5506\u306A\u3057\u306E\u5834\u5408\u304C\u304F\u3063\u3068\u671F\u5F85\u5024\u304C\u4E0B\u304C\u308B\u306E\u3067\u305D\u3053\u3067\u62BC\u3057\u5F15\u304D\u3059\u308B\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30FB\u30EA\u30BB\uFF10G\uFF5E1\u5468\u671F\u307E\u3067\n\u306A\u306B\u304B\u3057\u3089\u306E\u793A\u5506\u51FA\u305F\u3089AT\u307E\u3067\u7D9A\u884C\n\u2460\u30E9\u30A4\u30D0\u30EB\u30E1\u30C3\u30C8\u306B\u5909\u5316\n\u2461\u30A2\u30A4\u30C6\u30E0\u7372\u5F97\n\u2462\u821F\u5238\u9752\u5CF6\uFF08\u9752\u3067\u3082\u53EF\uFF09\n\u2463\u4E88\u60F3\u5C4B\u8D64\n\n\u203B1.2.4\u306F\u5927\u4F53\u5929\u4E95\u306A\u306E\u3067\u91E3\u3089\u308C\u3066\u7D9A\u884C\u3057\u306A\u3044\u3088\u3046\u306B\u3000"
  },
  {
    "id": "r16",
    "name": "\u30E2\u30F3\u30B9\u30BF\u30FC\u30CF\u30F3\u30BF\u30FC\u30E9\u30A4\u30BA",
    "detail": "MM\u30E2\u30FC\u30C9\u72D9\u3044",
    "tier": "\u305D\u306E\u4ED6\u72D9\u3044\u76EE",
    "tag": "MM\u30E2\u30FC\u30C9",
    "tagColor": "bg-purple-600",
    "imageUrl": "image_monhan.jpg",
    "link": "https://note.com/ruko7613/n/nd3699b73db3c",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\nMM\u30E2\u30FC\u30C9\u306B\u671F\u5F85\u5024\u304C\u8A70\u307E\u3063\u3066\u3044\u308B\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u8A18\u4E8B\u304B\u3089\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044"
  },
  {
    "id": "r17",
    "name": "\u304B\u3089\u304F\u308A\u30B5\u30FC\u30AB\u30B9",
    "detail": "\u9CF4\u6D77\u30B9\u30C6\u30FC\u30B8\u72D9\u3044",
    "tier": "\u305D\u306E\u4ED6\u72D9\u3044\u76EE",
    "tag": "\u512A\u9047, \u30BE\u30FC\u30F3",
    "tagColor": "bg-red-500, bg-cyan-400",
    "imageUrl": "image_karakuri.jpg",
    "link": "https://note.com/ruko7613/n/n2854687b16fd",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FBAT\u5F8C\u304BCZ\u5F8C\u306B\u958B\u59CB\u30B9\u30C6\u30FC\u30B8\u9CF4\u6D77\u306A\u3089A200\u304BB\u4EE5\u4E0A\u306A\u306E\u3067\u6253\u3066\u308B\u304C\u3001\u3059\u3067\u306B\u5168\u54E1\u77E5\u3063\u3066\u3044\u308B\u306E\u3067\u3075\u3064\u3046\u306F\u62FE\u3048\u306A\u3044\u306E\u3067\u8A18\u4E8B\u306E\u8981\u9818\u3067\u5DE5\u592B\u3059\u308B\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u8A18\u4E8B\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044"
  },
  {
    "id": "r18",
    "name": "\u5317\u6597\u306E\u62F3",
    "detail": "\u5404\u7A2E\u5929\u4E95\u72D9\u3044",
    "tier": "\u305D\u306E\u4ED6\u72D9\u3044\u76EE",
    "tag": "\u512A\u9047, \u5929\u4E95",
    "tagColor": "bg-red-500, bg-cyan-400",
    "imageUrl": "image_hokuto.jpg",
    "link": "https://note.com/ruko7613/n/n038a57fcc1ea",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u76F4\u8FD11300G\uFF5E1600G\u306E\u5DEE\u679A\u3067\u72B6\u614B\u304C3\u7A2E\u985E\uFF08\u512A\u9047\u30FB\u901A\u5E38\u30FB\u51B7\u9047\uFF09\u306B\u5206\u304B\u308C\u308B\u306E\u3067\u5404\u7A2E\u72B6\u614B\u3054\u3068\u306B\u30DC\u30FC\u30C0\u30FC\u3092\u5909\u3048\u308B\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30FB\u512A\u9047\u72B6\u614B\uFF08\u76F4\u8FD1\u5DEE\u679A\u30DE\u30A4\u30CA\u30B9700\u679A\u4EE5\u4E0A\uFF09\n430G\uFF5E\n\u30FB\u901A\u5E38\u72B6\u614B\uFF08\u76F4\u8FD1\u5DEE\u679A\uFF0D700\uFF5E\uFF0B700\u679A\uFF09\n530G\uFF5E\n\u30FB\u51B7\u9047\u72B6\u614B\uFF08\u76F4\u8FD1\u5DEE\u679A\u30D7\u30E9\u30B9700\u679A\u4EE5\u4E0A\uFF09\n650G\uFF5E\n\u30FB\u30EA\u30BB\u30C3\u30C8\n90G\uFF5E\n\n\u30FB\u30BE\u30FC\u30F3\u72D9\u3044\n\u512A\u9047\u72B6\u614B\u306E\u5373\u3084\u3081\u53F0\u3092\u5929\u56FD\u30C1\u30A7\u30C3\u30AF\n20G\u307E\u3067\u306B\u72B6\u614B\u5224\u5225\u3057\u3066\u901A\u5E38\u4EE5\u4E0B\u306A\u3089\u3084\u3081\u308B\u3053\u3068"
  },
  {
    "id": "r19",
    "name": "\u6C96\u30C9\u30ADDUO\u30A2\u30F3\u30B3\u30FC\u30EB",
    "detail": "\u30C1\u30E3\u30F3\u30B9\u30E2\u30FC\u30C9\u30BE\u30FC\u30F3\u72D9\u3044",
    "tier": "B",
    "tag": "\u30EA\u30BB",
    "tagColor": "bg-orange-400",
    "imageUrl": "image_okidokiduo.jpg",
    "link": "https://note.com/ruko7613/n/n1171ffbdcba5",
    "memo": "\u3010\u4E00\u8A00\u30E1\u30E2\u3011\n\u30FB\u7A3C\u50CD\u306F\u5C11\u306A\u304F\u3001\u901A\u5E38\u306E\u30CF\u30A4\u30A8\u30CA\u306F\u53B3\u3057\u3044\n\u30FB\u30EA\u30BB\u30C3\u30C8\u533A\u9593\u306F\u7518\u304F\u5C11\u3057\u3067\u3082\u89E6\u3089\u308C\u3066\u3044\u308C\u3070\u6253\u3066\u308B\u306E\u3067\u307B\u307C\u305D\u308C\u3060\u3051\n\u30FB\u6295\u8CC7\u304C\u3060\u3044\u3076\u304B\u304B\u308B\u53F0\u306A\u306E\u3067\u7B49\u4FA1\u304B\u6301\u3061\u7389\u4F59\u88D5\u3042\u308B\u3068\u304D\u306E\u307F\u6253\u3064\n\n\u3010\u72D9\u3044\u76EE\u30DC\u30FC\u30C0\u30FC\u3011\n\u30FB\u671D\u4E00\uFF10\u30B9\u306E\u53F0\u3092100G\uFF5E160G\u307E\u3067\n\u30FB\u3053\u306E\u533A\u9593\u306B\u5F53\u9078\u3057\u305F\u5834\u5408\u306F\u305D\u306E\u307E\u307E\u5929\u56FD\u304B5\u30B9\u30EB\u30FC\u307E\u3067\u6253\u3064\n\u30FB5\u30B9\u30EB\u30FC\u3057\u305F\u6642\u70B9\u3067\u901A\u5E38\u30E2\u30FC\u30C9B\u4EE5\u4E0A\u304B\u30C9\u30AD\u30CF\u30CAB\u4EE5\u4E0A\u306E\u793A\u5506\u304C\u51FA\u3066\u306A\u3051\u308C\u3070\u3084\u3081\u3002\u793A\u5506\u3042\u308A\u306A\u3089\u5929\u56FD\u307E\u3067\u3002"
  }
];
const HIDDEN_TARGET_ITEM_IDS = /* @__PURE__ */ new Set(["r_comp"]);
const REFRESH_OFFICIAL_TARGET_ITEM_IDS = /* @__PURE__ */ new Set(["r_kabaneri"]);
const TARGET_TIER_ORDER = ["S", "A", "B", "C", "\u305D\u306E\u4ED6\u72D9\u3044\u76EE"];
const TARGET_TAG_FILTER_OPTIONS = [
  { id: "all", label: "\u5168\u30BF\u30B0" },
  { id: "\u30EA\u30BB", label: "\u30EA\u30BB" },
  { id: "\u30BE\u30FC\u30F3", label: "\u30BE\u30FC\u30F3" },
  { id: "\u5DEE\u679A", label: "\u5DEE\u679A" },
  { id: "\u512A\u9047", label: "\u512A\u9047" },
  { id: "\u5929\u4E95", label: "\u5929\u4E95" },
  { id: "\u7A62\u308C", label: "\u7A62\u308C" },
  { id: "\u793A\u5506", label: "\u793A\u5506" },
  { id: "\u30B9\u30EB\u30FC", label: "\u30B9\u30EB\u30FC" }
];
const TIER_CONFIG = [
  { id: "S", label: "S", bg: "bg-gradient-to-r from-red-400 to-red-600" },
  { id: "A", label: "A", bg: "bg-gradient-to-r from-orange-400 to-orange-500" },
  { id: "B", label: "B", bg: "bg-gradient-to-r from-yellow-400 to-yellow-500" },
  { id: "C", label: "C", bg: "bg-gradient-to-r from-green-400 to-green-500" },
  { id: "\u305D\u306E\u4ED6\u72D9\u3044\u76EE", label: "\u305D\u306E\u4ED6\u72D9\u3044\u76EE", bg: "bg-gradient-to-r from-gray-400 to-gray-600" }
];
const TARGET_TIME_SLOTS = [
  { id: "morning", label: "9\u6642\uFF5E12\u6642" },
  { id: "afternoon", label: "12\uFF5E17\u6642" },
  { id: "evening", label: "17\uFF5E20\u6642" },
  { id: "late", label: "20\u6642\uFF5E\u9589\u5E97" }
];
const TARGET_TIME_SLOT_OPTIONS = [
  ...TARGET_TIME_SLOTS,
  { id: "all", label: "\u5168\u6642\u9593\u5E2F" }
];
const refreshOfficialTargetItems = (items) => {
  const officialById = new Map(RUKO_OFFICIAL_DATA.map((item) => [item.id, item]));
  const seen = /* @__PURE__ */ new Set();
  const refreshedItems = items.map((item) => {
    if (!item || !item.id) return item;
    seen.add(item.id);
    if (!REFRESH_OFFICIAL_TARGET_ITEM_IDS.has(item.id)) return item;
    return { ...item, ...officialById.get(item.id) };
  });
  REFRESH_OFFICIAL_TARGET_ITEM_IDS.forEach((id) => {
    if (!seen.has(id) && officialById.has(id)) refreshedItems.push(officialById.get(id));
  });
  return refreshedItems;
};
const TARGET_TIME_SLOT_MAP = {
  r_sengoku6: ["afternoon", "evening"],
  r_yabachiyo: ["afternoon", "evening"],
  r_rioace2: [],
  r_bio_re3: [],
  r_godkiseki: ["morning", "afternoon", "evening", "late"],
  r_yoshimune: [],
  r_yoshimune2: [],
  r_yoshimune3: ["late"],
  r_kabaneri: ["afternoon", "evening"],
  r_kabaneri2: ["afternoon", "evening", "late"],
  r4: ["morning", "afternoon", "evening"],
  r_ghoul: ["morning"],
  r2: ["afternoon", "evening"],
  r6: ["afternoon", "evening"],
  r8: ["afternoon", "evening"],
  r10: [],
  r12: ["late"],
  r13: [],
  r14: ["evening"],
  r15: ["morning"],
  r16: [],
  r17: [],
  r18: [],
  r19: ["morning"]
};
const normalizeTimeSlots = (slots) => {
  const slotSet = new Set(Array.isArray(slots) ? slots : []);
  return TARGET_TIME_SLOTS.map((slot) => slot.id).filter((id) => slotSet.has(id));
};
const inferTargetTimeSlots = (item) => {
  const text = `${item.name || ""} ${item.detail || ""} ${item.tag || ""} ${item.memo || ""}`;
  const slots = /* @__PURE__ */ new Set();
  if (/リセ|リセット|朝一|朝イチ/.test(text)) slots.add("morning");
  if (/示唆|周期|ゾーン|メニュー|天国/.test(text)) {
    slots.add("afternoon");
    slots.add("evening");
  }
  if (/天井|優遇|差枚|凹み|穢れ|スルー|上位/.test(text)) {
    slots.add("evening");
    slots.add("late");
  }
  if (slots.size === 0 && item.tier !== "\u5185\u90E8\u4ED5\u69D8") {
    slots.add("afternoon");
    slots.add("evening");
  }
  return normalizeTimeSlots([...slots]);
};
const getTargetTimeSlots = (item) => {
  const hasManualSlots = Object.prototype.hasOwnProperty.call(TARGET_TIME_SLOT_MAP, item.id);
  const baseSlots = hasManualSlots ? TARGET_TIME_SLOT_MAP[item.id] : item.timeSlots && item.timeSlots.length ? item.timeSlots : [];
  if (hasManualSlots) return normalizeTimeSlots(baseSlots);
  const inferredSlots = inferTargetTimeSlots(item);
  const slots = baseSlots.length ? baseSlots : inferredSlots;
  return normalizeTimeSlots(
    inferredSlots.includes("morning") && !slots.includes("morning") ? ["morning", ...slots] : slots
  );
};
const getTargetTimeLabel = (slotId) => TARGET_TIME_SLOTS.find((slot) => slot.id === slotId)?.label || slotId;
const getTargetTierRank = (tier) => {
  const index = TARGET_TIER_ORDER.indexOf(tier);
  return index === -1 ? TARGET_TIER_ORDER.length : index;
};
const getTargetTagNames = (item) => (item.tag || "").split(",").map((tag) => tag.trim()).filter(Boolean);
const matchesTargetTagFilter = (item, tagFilter) => {
  if (tagFilter === "all") return true;
  const tags = getTargetTagNames(item);
  return tags.some((tag) => tag.includes(tagFilter) || tagFilter.includes(tag));
};
const TIER_MACHINE_ALIAS_MAP = {
  "\u6226\u30B3\u30EC6": ["\u6226\u56FD\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\uFF16", "\u6226\u30B3\u30EC\uFF16", "\u6226\u56FD\u30B3\u30EC\u30AF\u30B7\u30E7\u30F36"],
  "\u30EA\u30AA\u30A8\u30FC\u30B9\uFF12": ["\u30B9\u30DE\u30B9\u30ED\u30B9\u30FC\u30D1\u30FC\u30EA\u30AA\u30A8\u30FC\u30B92", "\u30EA\u30AA\u30A8\u30FC\u30B92", "\u30B9\u30FC\u30D1\u30FC\u30EA\u30AA\u30A8\u30FC\u30B92"],
  "\u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C9RE:3": ["\u30B9\u30DE\u30B9\u30ED \u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C9RE:3", "\u30D0\u30A4\u30AARE3", "\u30D0\u30A4\u30AARE:3"],
  "L\u30B4\u30C3\u30C9\u8ECC\u8DE1": ["\u30B9\u30DE\u30B9\u30ED \u30DF\u30EA\u30AA\u30F3\u30B4\u30C3\u30C9-\u795E\u3005\u306E\u8ECC\u8DE1-", "\u30DF\u30EA\u30AA\u30F3\u30B4\u30C3\u30C9", "\u795E\u3005\u306E\u8ECC\u8DE1"],
  "\u771F\u6253\u5409\u5B97": ["\u771F\u6253 \u5409\u5B97", "\u5409\u5B97"],
  "\u30AB\u30D0\u30CD\u30EA\u6D77\u9580\u6C7A\u6226": ["\u30B9\u30DE\u30B9\u30ED \u7532\u9244\u57CE\u306E\u30AB\u30D0\u30CD\u30EA \u6D77\u9580\u6C7A\u6226", "\u7532\u9244\u57CE\u306E\u30AB\u30D0\u30CD\u30EA \u6D77\u9580\u6C7A\u6226", "\u30AB\u30D0\u30CD\u30EA"],
  "\u5317\u6597\u8EE2\u751F\uFF12": ["\u30B9\u30DE\u30B9\u30ED \u5317\u6597\u306E\u62F3 \u8EE2\u751F\u306E\u7AE02", "\u5317\u6597\u306E\u62F3 \u8EE2\u751F\u306E\u7AE02", "\u5317\u6597\u8EE2\u751F2"],
  "\u6771\u4EAC\u55B0\u7A2E": ["L \u6771\u4EAC\u55B0\u7A2E", "\u55B0\u7A2E"],
  "\u30F4\u30F4\u30F4\uFF12": ["L\u30D1\u30C1\u30B9\u30ED \u9769\u547D\u6A5F\u30F4\u30A1\u30EB\u30F4\u30EC\u30A4\u30F42\uFF08L\u30F4\u30F4\u30F42\uFF09", "\u30F4\u30A1\u30EB\u30F4\u30EC\u30A4\u30F42", "\u30F4\u30F4\u30F42"],
  "\u30B4\u30C3\u30C9\u30A4\u30FC\u5915\u30FC": ["\u30B9\u30DE\u30B9\u30ED \u30B4\u30C3\u30C9\u30A4\u30FC\u30BF\u30FC \u30EA\u30B6\u30EC\u30AF\u30B7\u30E7\u30F3", "\u30B4\u30C3\u30C9\u30A4\u30FC\u30BF\u30FC", "\u30B4\u30C3\u30C9\u30A4\u30FC\u30BF\u30FC\u30EA\u30B6\u30EC\u30AF\u30B7\u30E7\u30F3"],
  "\u653B\u6BBB\u6A5F\u52D5\u968A": ["\u30B9\u30DE\u30B9\u30ED \u653B\u6BBB\u6A5F\u52D5\u968A"],
  "\u304B\u3050\u3084\u69D8": ["\u30D1\u30C1\u30B9\u30ED \u304B\u3050\u3084\u69D8\u306F\u544A\u3089\u305B\u305F\u3044"],
  "\u708E\u708E\u30CE\u6D88\u9632\u968A": ["L\u30D1\u30C1\u30B9\u30ED \u708E\u708E\u30CE\u6D88\u9632\u968A", "L\u30D1\u30C1\u30B9\u30ED \u708E\u708E\u30CE\u6D88\u9632\u968A2", "\u708E\u708E\u30CE\u6D88\u9632\u968A2"],
  "\u30A2\u30BA\u30FC\u30EB\u30EC\u30FC\u30F3": ["L \u30A2\u30BA\u30FC\u30EB\u30EC\u30FC\u30F3 THE ANIMATION", "\u30A2\u30BA\u30EC\u30F3"],
  "\u30E2\u30F3\u30AD\u30FC\u30BF\u30FC\u30F3": ["\u30B9\u30DE\u30B9\u30ED\u30E2\u30F3\u30AD\u30FC\u30BF\u30FC\u30F3V", "\u30E2\u30F3\u30AD\u30FC\u30BF\u30FC\u30F3V"],
  "\u30E2\u30F3\u30B9\u30BF\u30FC\u30CF\u30F3\u30BF\u30FC\u30E9\u30A4\u30BA": ["\u30B9\u30DE\u30B9\u30ED \u30E2\u30F3\u30B9\u30BF\u30FC\u30CF\u30F3\u30BF\u30FC\u30E9\u30A4\u30BA", "\u30E2\u30F3\u30CF\u30F3\u30E9\u30A4\u30BA"],
  "\u304B\u3089\u304F\u308A\u30B5\u30FC\u30AB\u30B9": ["\u30D1\u30C1\u30B9\u30ED \u304B\u3089\u304F\u308A\u30B5\u30FC\u30AB\u30B9", "L\u30D1\u30C1\u30B9\u30ED \u304B\u3089\u304F\u308A\u30B5\u30FC\u30AB\u30B92", "\u304B\u3089\u304F\u308A2"],
  "\u5317\u6597\u306E\u62F3": ["\u30B9\u30DE\u30B9\u30ED\u5317\u6597\u306E\u62F3"],
  "\u6C96\u30C9\u30ADDUO\u30A2\u30F3\u30B3\u30FC\u30EB": ["\u30B9\u30DE\u30B9\u30ED \u6C96\u30C9\u30AD!DUO \u30A2\u30F3\u30B3\u30FC\u30EB", "\u6C96\u30C9\u30AD!DUO \u30A2\u30F3\u30B3\u30FC\u30EB"]
};
const SMART_SLOT_MACHINE_OPTIONS = [
  { name: "\uFF2C ULTRAMAN \u6700\u7D42\u6C7A\u6226", maker: "\u30AA\u30C3\u30B1\u30FC.", introducedAt: "2026.7.6", aliases: [] },
  { name: "L\u30D1\u30C1\u30B9\u30ED \u304B\u3089\u304F\u308A\u30B5\u30FC\u30AB\u30B92", maker: "\u30B8\u30A7\u30A4\u30D3\u30FC", introducedAt: "2026.7.6", aliases: ["\u304B\u3089\u304F\u308A\u30B5\u30FC\u30AB\u30B92", "\u304B\u3089\u304F\u308A2"] },
  { name: "L\u5357\u56FD\u80B2\u3061SPECIAL", maker: "\u30A2\u30E0\u30C6\u30C3\u30AF\u30B9", introducedAt: "2026.7.6", aliases: ["\u5357\u56FD\u80B2\u3061SPECIAL"] },
  { name: "\u30E4\u30D0\u30C1\u30D0", maker: "\u30CD\u30C3\u30C8", introducedAt: "2026.7.6", aliases: [] },
  { name: "\u30ED\u30FC\u30C6\u30A3\u30B9", maker: "\u5317\u96FB\u5B50", introducedAt: "2026.7.6", aliases: [] },
  { name: "\u6226\u56FD\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\uFF16", maker: "\u30B3\u30CA\u30DF\u30A2\u30DF\u30E5\u30FC\u30BA\u30E1\u30F3\u30C8", introducedAt: "2026.7.6", aliases: ["\u6226\u30B3\u30EC6", "\u6226\u30B3\u30EC\uFF16", "\u6226\u56FD\u30B3\u30EC\u30AF\u30B7\u30E7\u30F36"] },
  { name: "\u30B9\u30DE\u30FC\u30C8\u6C96\u30B9\u30ED\u3000\u30C0\u30FC\u30AF\u30CF\u30A4\u30D3", maker: "\u30D4\u30FC\u30BB\u30AB\u30F3\u30C9", introducedAt: "2026.6.22", aliases: ["\u30C0\u30FC\u30AF\u30CF\u30A4\u30D3"] },
  { name: "\uFF2C\u6226\u56FD\u4E59\u5973\uFF15 \u696D\u706B\u3092\u7A7F\u3064\u5BBF\u7114\u306E\u53CC\u5203", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2", introducedAt: "2026.6.8", aliases: ["\u6226\u56FD\u4E59\u59735", "\u6226\u56FD\u4E59\u5973\uFF15"] },
  { name: "\u30B9\u30DE\u30B9\u30ED BIRDIE WING -Golf Girls' Story-(\u30D0\u30FC\u30C7\u30A3\u30FC\u30A6\u30A3\u30F3\u30B0)", maker: "\u30E6\u30CB\u30D0\u30FC\u30B5\u30EB\u30D6\u30ED\u30B9", introducedAt: "2026.6.8", aliases: ["\u30D0\u30FC\u30C7\u30A3\u30FC\u30A6\u30A3\u30F3\u30B0", "BIRDIE WING"] },
  { name: "\u30B9\u30ED\u30C3\u30C8 \u30BD\u30FC\u30C9\u30A2\u30FC\u30C8\u30FB\u30AA\u30F3\u30E9\u30A4\u30F3\u2161", maker: "\u30D1\u30AA\u30F3\u30FB\u30C7\u30A3\u30FC\u30D4\u30FC", introducedAt: "2026.6.8", aliases: ["SAO2", "SAO\u2161"] },
  { name: "\uFF2C\u30BF\u30AF\u30C8\u30AA\u30FC\u30D1\u30B9 \u30C7\u30B9\u30C6\u30A3\u30CB\u30FC", maker: "\u30A2\u30E0\u30C6\u30C3\u30AF\u30B9", introducedAt: "2026.5.11", aliases: ["\u30BF\u30AF\u30C8\u30AA\u30FC\u30D1\u30B9"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C9RE:3", maker: "\u30A8\u30F3\u30BF\u30FC\u30E9\u30A4\u30BA", introducedAt: "2026.5.11", aliases: ["\u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C9RE:3", "\u30D0\u30A4\u30AARE3"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30D3\u30C3\u30B0\u30C9\u30EA\u30FC\u30E0 THE GOLDEN PUSHER", maker: "\u9280\u5EA7", introducedAt: "2026.5.11", aliases: ["\u30D3\u30C3\u30B0\u30C9\u30EA\u30FC\u30E0"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u30B9\u30FC\u30D1\u30FC\u30EA\u30AA\u30A8\u30FC\u30B92", maker: "\u5C71\u4F50\u30CD\u30AF\u30B9\u30C8", introducedAt: "2026.5.11", aliases: ["\u30EA\u30AA\u30A8\u30FC\u30B92", "\u30EA\u30AA\u30A8\u30FC\u30B9\uFF12", "\u30B9\u30FC\u30D1\u30FC\u30EA\u30AA\u30A8\u30FC\u30B92"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED \u6A5F\u52D5\u6226\u58EB\u30AC\u30F3\u30C0\u30E0\u30E6\u30CB\u30B3\u30FC\u30F3 \u899A\u9192DRIVE", maker: "\u30D3\u30B9\u30C6\u30A3", introducedAt: "2026.4.20", aliases: ["\u30AC\u30F3\u30C0\u30E0\u30E6\u30CB\u30B3\u30FC\u30F3 \u899A\u9192DRIVE", "\u30E6\u30CB\u30B3\u30FC\u30F3"] },
  { name: "\u30A2\u30CB\u30DE\u30EB\u30B9\u30ED\u30C3\u30C8\u30C9\u30C3\u30C1", maker: "\u5317\u96FB\u5B50", introducedAt: "2026.4.20", aliases: [] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30DF\u30EA\u30AA\u30F3\u30B4\u30C3\u30C9-\u795E\u3005\u306E\u8ECC\u8DE1-", maker: "\u30DF\u30BA\u30DB", introducedAt: "2026.4.20", aliases: ["L\u30B4\u30C3\u30C9\u8ECC\u8DE1", "\u30DF\u30EA\u30AA\u30F3\u30B4\u30C3\u30C9", "\u795E\u3005\u306E\u8ECC\u8DE1"] },
  { name: "L\u865A\u69CB\u63A8\u7406", maker: "\u30C7\u30A3\u30FB\u30E9\u30A4\u30C8", introducedAt: "2026.4.6", aliases: ["\u865A\u69CB\u63A8\u7406"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u30E8\u30EB\u30E0\u30F3\u30AC\u30F3\u30C9", maker: "\u5C71\u4F50\u30CD\u30AF\u30B9\u30C8", introducedAt: "2026.4.6", aliases: ["\u30E8\u30EB\u30E0\u30F3\u30AC\u30F3\u30C9"] },
  { name: "\u771F\u6253 \u5409\u5B97", maker: "\u5927\u90FD\u6280\u7814", introducedAt: "2026.4.6", aliases: ["\u771F\u6253\u5409\u5B97", "\u5409\u5B97"] },
  { name: "L\u30A2\u30AF\u30C0\u30DE\u30C9\u30E9\u30A4\u30D6", maker: "\u30B5\u30F3\u30B9\u30EA\u30FC", introducedAt: "2026.3.2", aliases: ["\u30A2\u30AF\u30C0\u30DE\u30C9\u30E9\u30A4\u30D6"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u7532\u9244\u57CE\u306E\u30AB\u30D0\u30CD\u30EA \u6D77\u9580\u6C7A\u6226", maker: "\u30BF\u30A4\u30E8\u30FC\u30A8\u30EC\u30C3\u30AF", introducedAt: "2026.3.2", aliases: ["\u30AB\u30D0\u30CD\u30EA\u6D77\u9580\u6C7A\u6226", "\u30AB\u30D0\u30CD\u30EA"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED \u708E\u708E\u30CE\u6D88\u9632\u968A2", maker: "SANKYO", introducedAt: "2026.2.2", aliases: ["\u708E\u708E\u30CE\u6D88\u9632\u968A2", "\u708E\u708E"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED\u3046\u307F\u306D\u3053\u306E\u306A\u304F\u9803\u306B2", maker: "\u30AA\u30FC\u30A4\u30BA\u30DF", introducedAt: "2026.2.2", aliases: ["\u3046\u307F\u306D\u3053\u306E\u306A\u304F\u9803\u306B2"] },
  { name: "\uFF2C\u7BC4\u99AC\u5203\u7259", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2", introducedAt: "2026.2.2", aliases: ["\u7BC4\u99AC\u5203\u7259", "\u5203\u7259"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30B4\u30D6\u30EA\u30F3\u30B9\u30EC\u30A4\u30E4\u30FC\u2161", maker: "JFJ", introducedAt: "2026.2.2", aliases: ["\u30B4\u30D6\u30EA\u30F3\u30B9\u30EC\u30A4\u30E4\u30FC2", "\u30B4\u30D6\u30B9\u30EC2"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u653B\u6BBB\u6A5F\u52D5\u968A", maker: "\u30B5\u30DF\u30FC", introducedAt: "2026.2.2", aliases: ["\u653B\u6BBB\u6A5F\u52D5\u968A"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u5317\u6597\u306E\u62F3 \u8EE2\u751F\u306E\u7AE02", maker: "\u9280\u5EA7", introducedAt: "2026.1.5", aliases: ["\u5317\u6597\u8EE2\u751F\uFF12", "\u5317\u6597\u8EE2\u751F2"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u9244\u62F36", maker: "\u5C71\u4F50", introducedAt: "2026.1.5", aliases: ["\u9244\u62F36", "\u9244\u62F3\uFF16"] },
  { name: "L \u7121\u8077\u8EE2\u751F \uFF5E\u7570\u4E16\u754C\u884C\u3063\u305F\u3089\u672C\u6C17\u3060\u3059\uFF5E", maker: "\u30CB\u30E5\u30FC\u30AE\u30F3", introducedAt: "2025.12.22", aliases: ["\u7121\u8077\u8EE2\u751F"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u6C96\u30C9\u30AD!DUO \u30A2\u30F3\u30B3\u30FC\u30EB", maker: "\u30E1\u30FC\u30B7\u30FC", introducedAt: "2025.12.22", aliases: ["\u6C96\u30C9\u30ADDUO\u30A2\u30F3\u30B3\u30FC\u30EB"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u79D8\u5B9D\u4F1D", maker: "\u30D1\u30AA\u30F3\u30FB\u30C7\u30A3\u30FC\u30D4\u30FC", introducedAt: "2025.12.22", aliases: ["\u79D8\u5B9D\u4F1D"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u5316\u7269\u8A9E", maker: "\u9280\u5EA7", introducedAt: "2025.12.8", aliases: ["\u5316\u7269\u8A9E"] },
  { name: "\u30D7\u30EA\u30BA\u30E0\u30CA\u30CA", maker: "\u30AB\u30EB\u30DF\u30CA", introducedAt: "2025.12.8", aliases: [] },
  { name: "\u9280\u6CB3\u82F1\u96C4\u4F1D\u8AAC Die Neue These (\u30C7\u30A3 \u30CE\u30A4\u30A8 \u30C6\u30FC\u30BC)", maker: "\u30B0\u30EC\u30FC\u30C9\u30EF\u30F3", introducedAt: "2025.12.8", aliases: ["\u9280\u6CB3\u82F1\u96C4\u4F1D\u8AAC"] },
  { name: "\u30D0\u30FC\u30CB\u30F3\u30B0\u30A8\u30AF\u30B9\u30D7\u30EC\u30B9", maker: "\u5317\u96FB\u5B50", introducedAt: "2025.12.1", aliases: [] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u30CD\u30AA\u30D7\u30E9\u30CD\u30C3\u30C8", maker: "\u30BB\u30D6\u30F3\u30EA\u30FC\u30B0", introducedAt: "2025.11.17", aliases: ["\u30CD\u30AA\u30D7\u30E9\u30CD\u30C3\u30C8"] },
  { name: "L \u7D76\u5BFE\u885D\u6FC0\u2163", maker: "\u30A2\u30A4\u30C9\u30EB", introducedAt: "2025.11.4", aliases: ["\u7D76\u5BFE\u885D\u6FC04", "\u7D76\u5BFE\u885D\u6FC0\u2163"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED \u9769\u547D\u6A5F\u30F4\u30A1\u30EB\u30F4\u30EC\u30A4\u30F42\uFF08L\u30F4\u30F4\u30F42\uFF09", maker: "SANKYO", introducedAt: "2025.11.4", aliases: ["\u30F4\u30F4\u30F4\uFF12", "\u30F4\u30F4\u30F42", "\u30F4\u30A1\u30EB\u30F4\u30EC\u30A4\u30F42"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u3068\u3042\u308B\u79D1\u5B66\u306E\u8D85\u96FB\u78C1\u7832\uFF12", maker: "\u85E4\u5546\u4E8B", introducedAt: "2025.11.4", aliases: ["\u8D85\u96FB\u78C1\u78322", "\u30EC\u30FC\u30EB\u30AC\u30F32"] },
  { name: "L \u8352\u91CE\u306E\u30B3\u30C8\u30D6\u30AD\u98DB\u884C\u968A", maker: "\u30B9\u30D1\u30A4\u30AD\u30FC", introducedAt: "2025.10.20", aliases: ["\u8352\u91CE\u306E\u30B3\u30C8\u30D6\u30AD\u98DB\u884C\u968A"] },
  { name: "\uFF2C\u4E3B\u5F79\u306F\u92AD\u5F62\uFF15", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2", introducedAt: "2025.10.6", aliases: ["\u4E3B\u5F79\u306F\u92AD\u5F625", "\u92AD\u5F625"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30D0\u30D9\u30EB", maker: "\u30E6\u30CB\u30D0\u30FC\u30B5\u30EB\u30D6\u30ED\u30B9", introducedAt: "2025.10.6", aliases: ["\u30D0\u30D9\u30EB"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u65B0\u9B3C\u6B66\u80053", maker: "\u30EC\u30AA\u30B9\u30BF\u30FC", introducedAt: "2025.10.6", aliases: ["\u65B0\u9B3C\u6B66\u80053"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30C9\u30EB\u30A2\u30FC\u30AC\u306E\u5854", maker: "\u30DF\u30BA\u30DB", introducedAt: "2025.9.8", aliases: ["\u30C9\u30EB\u30A2\u30FC\u30AC\u306E\u5854"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u6771\u4EAC\u30EA\u30D9\u30F3\u30B8\u30E3\u30FC\u30BA(\u30EA\u30D9\u30B9\u30ED)", maker: "\u30B5\u30DF\u30FC", introducedAt: "2025.9.8", aliases: ["\u6771\u4EAC\u30EA\u30D9\u30F3\u30B8\u30E3\u30FC\u30BA", "\u30EA\u30D9\u30B9\u30ED"] },
  { name: "L \u30A2\u30BA\u30FC\u30EB\u30EC\u30FC\u30F3 THE ANIMATION", maker: "\u4EAC\u697D\u7523\u696D.", introducedAt: "2025.8.4", aliases: ["\u30A2\u30BA\u30FC\u30EB\u30EC\u30FC\u30F3", "\u30A2\u30BA\u30EC\u30F3"] },
  { name: "\uFF2C \u30C0\u30FC\u30EA\u30F3\u30FB\u30A4\u30F3\u30FB\u30B6\u30FB\u30D5\u30E9\u30F3\u30AD\u30B9", maker: "\u30B9\u30D1\u30A4\u30AD\u30FC", introducedAt: "2025.8.4", aliases: ["\u30C0\u30EA\u30D5\u30E9"] },
  { name: "L\u54B2-Saki-\u9802\u4E0A\u6C7A\u6226", maker: "\u4E09\u6D0B\u7269\u7523", introducedAt: "2025.8.4", aliases: ["\u54B2", "Saki"] },
  { name: "\u30D1\u30C1\u30B9\u30ED \u8EE2\u751F\u3057\u305F\u3089\u5263\u3067\u3057\u305F", maker: "\u30B0\u30EC\u30FC\u30C9\u30EF\u30F3", introducedAt: "2025.8.4", aliases: ["\u8EE2\u5263"] },
  { name: "\u308F\u305F\u3057\u306E\u5E78\u305B\u306A\u7D50\u5A5A", maker: "KPE", introducedAt: "2025.7.7", aliases: [] },
  { name: "\uFF2C \u7D76\u5BFE\u885D\u6FC0\uFF5EPLATONIC HEART\uFF5E", maker: "\u30B9\u30D1\u30A4\u30AD\u30FC", introducedAt: "2025.6.16", aliases: ["\u7D76\u5BFE\u885D\u6FC0"] },
  { name: "L ULTRAMAN", maker: "\u4EAC\u697D\u7523\u696D.", introducedAt: "2025.6.2", aliases: ["ULTRAMAN"] },
  { name: "LB \u30D1\u30C1\u30B9\u30ED1000\u3061\u3083\u3093A", maker: "\u30AA\u30FC\u30A4\u30BA\u30DF\u30E9\u30DC", introducedAt: "2025.6.2", aliases: ["1000\u3061\u3083\u3093"] },
  { name: "LB\u30B8\u30E3\u30C3\u30AF\u30DD\u30C3\u30C8", maker: "\u30E4\u30FC\u30DE", introducedAt: "2025.6.2", aliases: ["\u30B8\u30E3\u30C3\u30AF\u30DD\u30C3\u30C8"] },
  { name: "\uFF2C\uFF22\u30D7\u30EC\u30DF\u30A2\u30E0\u3046\u307E\u3044\u68D2", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2\u30A8\u30B9\u30C6\u30FC\u30C8", introducedAt: "2025.6.2", aliases: ["\u3046\u307E\u3044\u68D2"] },
  { name: "\u3044\u3056\uFF01\u756A\u9577", maker: "\u30B5\u30DC\u30CF\u30CB", introducedAt: "2025.6.2", aliases: ["\u3044\u3056\u756A\u9577"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30AE\u30EB\u30C6\u30A3\u30AF\u30E9\u30A6\u30F32", maker: "\u30A2\u30AF\u30ED\u30B9", introducedAt: "2025.6.2", aliases: ["\u30AE\u30EB\u30C6\u30A3\u30AF\u30E9\u30A6\u30F32", "\u30AE\u30EB\u30AF\u30E92"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30C7\u30D3\u30EB \u30E1\u30A4 \u30AF\u30E9\u30A45 \u30B9\u30BF\u30A4\u30EA\u30C3\u30B7\u30E5\u30C8\u30E9\u30A4\u30D6", maker: "\u30A2\u30C7\u30EA\u30AA\u30F3", introducedAt: "2025.6.2", aliases: ["DMC5", "\u30C7\u30D3\u30EB\u30E1\u30A4\u30AF\u30E9\u30A45"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u30CB\u30E5\u30FC\u30D1\u30EB\u30B5\u30FCBT", maker: "\u5C71\u4F50", introducedAt: "2025.6.2", aliases: ["\u30CB\u30E5\u30FC\u30D1\u30EB\u30B5\u30FCBT"] },
  { name: "LToLOVE\u308B\u30C0\u30FC\u30AF\u30CD\u30B9 TRANCE ver.8.7", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2\u30A8\u30B9\u30C6\u30FC\u30C8", introducedAt: "2025.5.19", aliases: ["ToLOVE\u308B", "\u3068\u3089\u3076\u308B"] },
  { name: "\u82B1\u7B20", maker: "\u30CD\u30C3\u30C8", introducedAt: "2025.5.19", aliases: [] },
  { name: "\uFF2C\u30D1\u30C1\u30B9\u30ED \u6A5F\u52D5\u6226\u58EB\u30AC\u30F3\u30C0\u30E0SEED", maker: "\u30D3\u30B9\u30C6\u30A3", introducedAt: "2025.5.7", aliases: ["\u30AC\u30F3\u30C0\u30E0SEED"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u3088\u3046\u3053\u305D\u5B9F\u529B\u81F3\u4E0A\u4E3B\u7FA9\u306E\u6559\u5BA4\u3078", maker: "DAXEL", introducedAt: "2025.5.7", aliases: ["\u3088\u3046\u5B9F"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u7DD1\u30C9\u30F3 VIVA!\u60C5\u71B1\u5357\u7C73\u7DE8 REVIVAL", maker: "\u30E6\u30CB\u30D0\u30FC\u30B5\u30EB\u30D6\u30ED\u30B9", introducedAt: "2025.5.7", aliases: ["\u7DD1\u30C9\u30F3"] },
  { name: "L \u9EBB\u96C0\u7269\u8A9E", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2\u30A8\u30B9\u30C6\u30FC\u30C8", introducedAt: "2025.4.21", aliases: ["\u9EBB\u96C0\u7269\u8A9E"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30A2\u30A4\u30C9\u30EB\u30DE\u30B9\u30BF\u30FC \u30DF\u30EA\u30AA\u30F3\u30E9\u30A4\u30D6\uFF01 \u30CD\u30AF\u30B9\u30C8\u30D7\u30ED\u30ED\u30FC\u30B0", maker: "\u5C71\u4F50", introducedAt: "2025.4.21", aliases: ["\u30A2\u30A4\u30C9\u30EB\u30DE\u30B9\u30BF\u30FC", "\u30DF\u30EA\u30AA\u30F3\u30E9\u30A4\u30D6"] },
  { name: "\u5409\u5B97", maker: "\u30B5\u30DC\u30CF\u30CB", introducedAt: "2025.4.21", aliases: [] },
  { name: "L\u3046\u3057\u304A\u3068\u3068\u3089\u767D\u9762\u6C7A\u6226VH", maker: "\u30A2\u30A4\u30C9\u30EB", introducedAt: "2025.4.7", aliases: ["\u3046\u3057\u304A\u3068\u3068\u3089"] },
  { name: "L\u30B4\u30B8\u30E9", maker: "\u30CB\u30E5\u30FC\u30AE\u30F3", introducedAt: "2025.4.7", aliases: ["\u30B4\u30B8\u30E9"] },
  { name: "\u30B9\u30DE\u30FC\u30C8\u6C96\u30B9\u30ED\u3000\u30A2\u30E1\u30A4\u30B8\u30F3\u30B0\u30E9\u30A4\u30D6", maker: "\u30D1\u30A4\u30AA\u30CB\u30A2", introducedAt: "2025.4.7", aliases: ["\u30A2\u30E1\u30A4\u30B8\u30F3\u30B0\u30E9\u30A4\u30D6"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30DE\u30AE\u30A2\u30EC\u30B3\u30FC\u30C9 \u9B54\u6CD5\u5C11\u5973\u307E\u3069\u304B\u2606\u30DE\u30AE\u30AB\u5916\u4F1D", maker: "\u30DF\u30BA\u30DB", introducedAt: "2025.4.7", aliases: ["\u30DE\u30AE\u30EC\u30B3", "\u307E\u3069\u30DE\u30AE\u5916\u4F1D"] },
  { name: "L \u4EEE\u9762\u30E9\u30A4\u30C0\u30FC\u96FB\u738B", maker: "SUN SUN SUN", introducedAt: "2025.3.3", aliases: ["\u96FB\u738B"] },
  { name: "L\u5C11\u5973\u2606\u6B4C\u5287 \u30EC\u30F4\u30E5\u30FC\u30B9\u30BF\u30A1\u30E9\u30A4\u30C8 -The SLOT-", maker: "\u30AA\u30FC\u30A4\u30BA\u30DF", introducedAt: "2025.3.3", aliases: ["\u30EC\u30F4\u30E5\u30FC\u30B9\u30BF\u30A1\u30E9\u30A4\u30C8"] },
  { name: "Sister Quest(\u30B7\u30B9\u30BF\u30FC\u30AF\u30A8\u30B9\u30C8)", maker: "\u30AB\u30EB\u30DF\u30CA", introducedAt: "2025.3.3", aliases: ["\u30B7\u30B9\u30BF\u30FC\u30AF\u30A8\u30B9\u30C8"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C95", maker: "\u30A8\u30F3\u30BF\u30FC\u30E9\u30A4\u30BA", introducedAt: "2025.3.3", aliases: ["\u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C95", "\u30D0\u30A4\u30AA5"] },
  { name: "\u3066\u3043\u3060\u3069\u3093\u3069\u3093", maker: "\u30D1\u30AA\u30F3\u30FB\u30C7\u30A3\u30FC\u30D4\u30FC", introducedAt: "2025.3.3", aliases: [] },
  { name: "\u56DE\u80F4\u9ED9\u793A\u9332\u30AB\u30A4\u30B8 \u72C2\u5BB4", maker: "\u30ED\u30C7\u30AA", introducedAt: "2025.3.3", aliases: ["\u30AB\u30A4\u30B8"] },
  { name: "L \u6771\u4EAC\u55B0\u7A2E", maker: "\u30B9\u30D1\u30A4\u30AD\u30FC", introducedAt: "2025.2.3", aliases: ["\u6771\u4EAC\u55B0\u7A2E", "\u55B0\u7A2E"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED \u3042\u308A\u3075\u308C\u305F\u8077\u696D\u3067\u4E16\u754C\u6700\u5F37", maker: "\u30B8\u30A7\u30A4\u30D3\u30FC", introducedAt: "2025.2.3", aliases: ["\u3042\u308A\u3075\u308C"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30B7\u30E3\u30FC\u30DE\u30F3\u30AD\u30F3\u30B0", maker: "\u30A8\u30EC\u30B3", introducedAt: "2025.2.3", aliases: ["\u30B7\u30E3\u30FC\u30DE\u30F3\u30AD\u30F3\u30B0"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u30B9\u30FC\u30D1\u30FC\u30D6\u30E9\u30C3\u30AF\u30B8\u30E3\u30C3\u30AF", maker: "\u30BB\u30D6\u30F3\u30EA\u30FC\u30B0", introducedAt: "2025.2.3", aliases: ["\u30B9\u30FC\u30D1\u30FC\u30D6\u30E9\u30C3\u30AF\u30B8\u30E3\u30C3\u30AF", "SBJ"] },
  { name: "A-SLOT+ \u30C7\u30A3\u30B9\u30AF\u30A2\u30C3\u30D7 ULTRAREMIX", maker: "\u30BF\u30A4\u30E8\u30FC\u30A8\u30EC\u30C3\u30AF", introducedAt: "2025.1.20", aliases: ["\u30C7\u30A3\u30B9\u30AF\u30A2\u30C3\u30D7"] },
  { name: "L \u306B\u3083\u3093\u3053\u5927\u6226\u4E89 \u8D85\u795E\u901F", maker: "\u4EAC\u697D\u7523\u696D.", introducedAt: "2025.1.20", aliases: ["\u306B\u3083\u3093\u3053\u5927\u6226\u4E89"] },
  { name: "L \u5CF6\u5A18", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2", introducedAt: "2025.1.20", aliases: ["\u5CF6\u5A18"] },
  { name: "\uFF2C\u30D1\u30C1\u30B9\u30ED \u30B7\u30F3\u30FB\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3", maker: "\u30D3\u30B9\u30C6\u30A3", introducedAt: "2025.1.20", aliases: ["\u30B7\u30F3\u30A8\u30F4\u30A1", "\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3"] },
  { name: "\u30B9\u30DE\u30FC\u30C8\u6C96\u30B9\u30ED \u30B9\u30BF\u30FC\u30CF\u30CA\u30CF\u30CA", maker: "\u30D1\u30A4\u30AA\u30CB\u30A2", introducedAt: "2025.1.20", aliases: ["\u30B9\u30BF\u30FC\u30CF\u30CA\u30CF\u30CA"] },
  { name: "\u4E03\u3064\u306E\u9B54\u5263\u304C\u652F\u914D\u3059\u308B", maker: "KPE", introducedAt: "2025.1.20", aliases: ["\u306A\u306A\u3064\u307E"] },
  { name: "L \u30B5\u30E9\u30EA\u30FC\u30DE\u30F3\u91D1\u592A\u90CE", maker: "EXCITE", introducedAt: "2025.1.6", aliases: ["\u91D1\u592A\u90CE"] },
  { name: "\u30C1\u30D0\u30EA\u30E82\u30D7\u30E9\u30B9", maker: "\u30AA\u30FC\u30BC\u30AD", introducedAt: "2025.1.6", aliases: ["\u30C1\u30D0\u30EA\u30E82+"] },
  { name: "L\u30B9\u30FC\u30D1\u30FC\u30D3\u30F3\u30B4\u30CD\u30AA", maker: "\u30D9\u30EB\u30B3", introducedAt: "2024.12.16", aliases: ["\u30D3\u30F3\u30B4"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED \u30C0\u30F3\u30D9\u30EB\u4F55\u30AD\u30ED\u6301\u3066\u308B\uFF1F", maker: "SANKYO", introducedAt: "2024.12.16", aliases: ["\u30C0\u30F3\u30D9\u30EB"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u4E00\u65B9\u901A\u884C \u3068\u3042\u308B\u9B54\u8853\u306E\u7981\u66F8\u76EE\u9332", maker: "\u30AA\u30EC\u30F3\u30B8", introducedAt: "2024.12.16", aliases: ["\u4E00\u65B9\u901A\u884C", "\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF"] },
  { name: "L\u30EB\u30D1\u30F3\u4E09\u4E16 \u5927\u822A\u6D77\u8005\u306E\u79D8\u5B9D", maker: "\u5E73\u548C", introducedAt: "2024.12.2", aliases: ["\u30EB\u30D1\u30F3\u4E09\u4E16"] },
  { name: "L\u72AC\u591C\u53C92", maker: "\u30A8\u30D5", introducedAt: "2024.12.2", aliases: ["\u72AC\u591C\u53C92"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u8056\u6226\u58EB\u30C0\u30F3\u30D0\u30A4\u30F3", maker: "\u9280\u5EA7", introducedAt: "2024.12.2", aliases: ["\u30C0\u30F3\u30D0\u30A4\u30F3"] },
  { name: "\u6843\u592A\u90CE\u96FB\u9244 \uFF5E\u30D1\u30C1\u30B9\u30ED\u3082\u5B9A\u756A\uFF01\uFF5E", maker: "KPE", introducedAt: "2024.12.2", aliases: ["\u6843\u9244"] },
  { name: "L\u30C0\u30D6\u30EB\u30A2\u30BF\u30C3\u30AF2 withOZS-1000\uFF06RAPHAEL", maker: "\u30AA\u30FC\u30A4\u30BA\u30DF", introducedAt: "2024.11.18", aliases: ["\u30C0\u30D6\u30EB\u30A2\u30BF\u30C3\u30AF2"] },
  { name: "\u30B9\u30DE\u30FC\u30C8\u6C96\u30B9\u30ED\u3000\u8D85\u83EF\u796D", maker: "\u30D1\u30A4\u30AA\u30CB\u30A2", introducedAt: "2024.11.18", aliases: ["\u8D85\u83EF\u796D"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30E2\u30F3\u30B9\u30BF\u30FC\u30CF\u30F3\u30BF\u30FC\u30E9\u30A4\u30BA", maker: "\u30A2\u30C7\u30EA\u30AA\u30F3", introducedAt: "2024.11.18", aliases: ["\u30E2\u30F3\u30B9\u30BF\u30FC\u30CF\u30F3\u30BF\u30FC\u30E9\u30A4\u30BA", "\u30E2\u30F3\u30CF\u30F3\u30E9\u30A4\u30BA"] },
  { name: "L \u65B0\u30FB\u5FC5\u6BBA\u4ED5\u7F6E\u4EBA \u56DE\u80F4 CRASH SPEC", maker: "\u4EAC\u697D\u7523\u696D.", introducedAt: "2024.11.5", aliases: ["\u5FC5\u6BBA\u4ED5\u7F6E\u4EBA"] },
  { name: "L\u30D0\u30F3\u30C9\u30EA\uFF01", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2\u30A8\u30B9\u30C6\u30FC\u30C8", introducedAt: "2024.11.5", aliases: ["\u30D0\u30F3\u30C9\u30EA"] },
  { name: "\u30B9\u30ED\u30C3\u30C8 Re:\u30BC\u30ED\u304B\u3089\u59CB\u3081\u308B\u7570\u4E16\u754C\u751F\u6D3B Season2", maker: "\u30D1\u30AA\u30F3\u30FB\u30C7\u30A3\u30FC\u30D4\u30FC", introducedAt: "2024.10.21", aliases: ["\u30EA\u30BC\u30ED2", "Re:\u30BC\u30ED"] },
  { name: "L \u771F\u30FB\u4E00\u9A0E\u5F53\u5343", maker: "Daiichi", introducedAt: "2024.10.7", aliases: ["\u4E00\u9A0E\u5F53\u5343"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u9B3C\u6B66\u80053", maker: "\u30A2\u30C7\u30EA\u30AA\u30F3", introducedAt: "2024.10.7", aliases: ["\u9B3C\u6B66\u80053"] },
  { name: "\u4ECA\u65E5\u304B\u3089\u4FFA\u306F!! \u30D1\u30C1\u30B9\u30ED\u7DE8", maker: "\u30D5\u30A1\u30A4\u30C8\u30AF\u30E9\u30D6", introducedAt: "2024.10.7", aliases: ["\u4ECA\u65E5\u304B\u3089\u4FFA\u306F"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u982D\u6587\u5B57D 2nd", maker: "\u30ED\u30C7\u30AA", introducedAt: "2024.10.2", aliases: ["\u982D\u6587\u5B57D2", "\u30A4\u30CBD2"] },
  { name: "A-SLOT+ \u3053\u306E\u7D20\u6674\u3089\u3057\u3044\u4E16\u754C\u306B\u795D\u798F\u3092!", maker: "\u30ED\u30C7\u30AA", introducedAt: "2024.9.2", aliases: ["\u3053\u306E\u3059\u3070"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED\u9583\u4E71\u30AB\u30B0\u30E92 SHINOVI MASTER", maker: "\u30AA\u30FC\u30A4\u30BA\u30DF\u30E9\u30DC", introducedAt: "2024.9.2", aliases: ["\u9583\u4E71\u30AB\u30B0\u30E92"] },
  { name: "\u30D1\u30C1\u30B9\u30ED L\u9EC4\u9580\u3061\u3083\u307E\u5929", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2", introducedAt: "2024.9.2", aliases: ["\u9EC4\u9580\u3061\u3083\u307E\u5929"] },
  { name: "\u30D1\u30C1\u30B9\u30ED \u304B\u3050\u3084\u69D8\u306F\u544A\u3089\u305B\u305F\u3044", maker: "SANKYO", introducedAt: "2024.9.2", aliases: ["\u304B\u3050\u3084\u69D8"] },
  { name: "L D4DJ Pachi-Slot Mix", maker: "\u4EAC\u697D\u7523\u696D.", introducedAt: "2024.8.5", aliases: ["D4DJ"] },
  { name: "L\u30EF\u30F3\u30D1\u30F3\u30DE\u30F3", maker: "EXCITE", introducedAt: "2024.8.5", aliases: ["\u30EF\u30F3\u30D1\u30F3\u30DE\u30F3"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30B2\u30B2\u30B2\u306E\u9B3C\u592A\u90CE \u899A\u9192", maker: "JFJ", introducedAt: "2024.8.5", aliases: ["\u30B2\u30B2\u30B2\u306E\u9B3C\u592A\u90CE"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30C8\u30ED\u30D4\u30AB\u30FC\u30CA", maker: "\u30DF\u30BA\u30DB", introducedAt: "2024.8.5", aliases: ["\u30C8\u30ED\u30D4\u30AB\u30FC\u30CA"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30B4\u30C3\u30C9\u30A4\u30FC\u30BF\u30FC \u30EA\u30B6\u30EC\u30AF\u30B7\u30E7\u30F3", maker: "\u30BB\u30D6\u30F3\u30EA\u30FC\u30B0", introducedAt: "2024.7.22", aliases: ["\u30B4\u30C3\u30C9\u30A4\u30FC\u5915\u30FC", "\u30B4\u30C3\u30C9\u30A4\u30FC\u30BF\u30FC"] },
  { name: "\u30B9\u30ED\u30C3\u30C8 \u30BE\u30F3\u30D3\u30E9\u30F3\u30C9\u30B5\u30AC", maker: "\u5927\u90FD\u6280\u7814", introducedAt: "2024.7.22", aliases: ["\u30BE\u30F3\u30D3\u30E9\u30F3\u30C9\u30B5\u30AC"] },
  { name: "\u8CDE\u91D1\u9996Angel", maker: "\u30CD\u30C3\u30C8", introducedAt: "2024.7.22", aliases: ["\u8CDE\u91D1\u9996"] },
  { name: "L \u30A2\u30AB\u30E1\u304C\u65AC\u308B! 2", maker: "\u65B0\u65E5\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC", introducedAt: "2024.7.8", aliases: ["\u30A2\u30AB\u30E1\u304C\u65AC\u308B2"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED\u6226\u59EB\u7D76\u5531\u30B7\u30F3\u30D5\u30A9\u30AE\u30A2 \u6B63\u7FA9\u306E\u6B4C", maker: "\u30B8\u30A7\u30A4\u30D3\u30FC", introducedAt: "2024.7.8", aliases: ["\u30B7\u30F3\u30D5\u30A9\u30AE\u30A2"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u771F\u30FB\u5317\u6597\u7121\u53CC", maker: "\u30ED\u30C7\u30AA", introducedAt: "2024.7.8", aliases: ["\u5317\u6597\u7121\u53CC"] },
  { name: "L ToLOVE\u308B\u30C0\u30FC\u30AF\u30CD\u30B9", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2\u30A8\u30B9\u30C6\u30FC\u30C8", introducedAt: "2024.6.3", aliases: ["ToLOVE\u308B", "\u3068\u3089\u3076\u308B"] },
  { name: "L\u8056\u95D8\u58EB\u661F\u77E2 \u6D77\u7687\u899A\u9192 CUSTOM EDITION", maker: "\u30B5\u30F3\u30B9\u30EA\u30FC", introducedAt: "2024.6.3", aliases: ["\u8056\u95D8\u58EB\u661F\u77E2", "\u661F\u77E2"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30B9\u30C8\u30EA\u30FC\u30C8\u30D5\u30A1\u30A4\u30BF\u30FC\uFF36 \u6311\u6226\u8005\u306E\u9053", maker: "\u30A8\u30F3\u30BF\u30FC\u30E9\u30A4\u30BA", introducedAt: "2024.6.3", aliases: ["\u30B9\u30C8\u30EA\u30FC\u30C8\u30D5\u30A1\u30A4\u30BF\u30FCV", "\u30B9\u30C8V"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u75DB\u3044\u306E\u306F\u5ACC\u306A\u306E\u3067\u9632\u5FA1\u529B\u306B\u6975\u632F\u308A\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002", maker: "\u30ED\u30C7\u30AA", introducedAt: "2024.6.3", aliases: ["\u9632\u632F\u308A"] },
  { name: "L\u30A6\u30EB\u30C8\u30E9\u30DE\u30F3\u30C6\u30A3\u30AC", maker: "\u4EAC\u697D\u7523\u696D.", introducedAt: "2024.5.7", aliases: ["\u30C6\u30A3\u30AC"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED \u708E\u708E\u30CE\u6D88\u9632\u968A", maker: "\u30B8\u30A7\u30A4\u30D3\u30FC", introducedAt: "2024.5.7", aliases: ["\u708E\u708E\u30CE\u6D88\u9632\u968A", "\u708E\u708E"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u4EA4\u97FF\u8A69\u7BC7\u30A8\u30A6\u30EC\u30AB\u30BB\u30D6\u30F34 HI-EVOLUTION", maker: "\u9280\u5EA7", introducedAt: "2024.5.7", aliases: ["\u30A8\u30A6\u30EC\u30AB\u30BB\u30D6\u30F34", "\u30A8\u30A6\u30EC\u30AB4"] },
  { name: "\u62BC\u5FCD\uFF01\u756A\u9577\uFF14", maker: "\u5927\u90FD\u6280\u7814", introducedAt: "2024.4.22", aliases: ["\u756A\u95774"] },
  { name: "L\u3046\u308B\u661F\u3084\u3064\u3089", maker: "EXCITE", introducedAt: "2024.4.8", aliases: ["\u3046\u308B\u661F\u3084\u3064\u3089"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30B4\u30FC\u30EB\u30C7\u30F3\u30AB\u30E0\u30A4", maker: "\u9280\u5EA7", introducedAt: "2024.4.8", aliases: ["\u30B4\u30FC\u30EB\u30C7\u30F3\u30AB\u30E0\u30A4"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30B9\u30C8\u30E9\u30A4\u30AF\u30FB\u30B6\u30FB\u30D6\u30E9\u30C3\u30C9", maker: "\u30A8\u30F3\u30BF\u30FC\u30E9\u30A4\u30BA", introducedAt: "2024.4.8", aliases: ["\u30B9\u30C8\u30D6\u30E9"] },
  { name: "\u5FCD\u9B42\u53C2 \u301C\u5965\u7FA9\u7686\u4F1D\u30CE\u7AE0\u301C", maker: "\u5927\u90FD\u6280\u7814", introducedAt: "2024.3.18", aliases: ["\u5FCD\u9B42\u53C2"] },
  { name: "L\u5357\u56FD\u80B2\u3061", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2\u30A8\u30B9\u30C6\u30FC\u30C8", introducedAt: "2024.3.4", aliases: ["\u5357\u56FD\u80B2\u3061"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u30AD\u30F3\u30B0\u30D1\u30EB\u30B5\u30FC", maker: "\u30BB\u30D6\u30F3\u30EA\u30FC\u30B0", introducedAt: "2024.3.4", aliases: ["\u30AD\u30F3\u30D1\u30EB"] },
  { name: "\u30C1\u30D0\u30EA\u30E82", maker: "\u30AA\u30FC\u30BC\u30AD", introducedAt: "2024.3.4", aliases: ["\u30C1\u30D0\u30EA\u30E8"] },
  { name: "G\u2160\u512A\u99FF\u5036\u697D\u90E8\u9EC4\u91D1", maker: "\u30B3\u30CA\u30DF\u30A2\u30DF\u30E5\u30FC\u30BA\u30E1\u30F3\u30C8", introducedAt: "2024.2.5", aliases: ["G1\u512A\u99FF\u5036\u697D\u90E8\u9EC4\u91D1", "\u307E\u3053\u307E\u3053"] },
  { name: "L\u30B4\u30B8\u30E9\u5BFE\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3", maker: "\u30D3\u30B9\u30C6\u30A3", introducedAt: "2024.2.5", aliases: ["\u30B4\u30B8\u30A8\u30F4\u30A1"] },
  { name: "L\u30B9\u30C8\u30E9\u30A4\u30AF\u30A6\u30A3\u30C3\u30C1\u30FC\u30BA2", maker: "\u30B5\u30F3\u30B9\u30EA\u30FC", introducedAt: "2024.2.5", aliases: ["\u30B9\u30C8\u30D1\u30F32"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED\u30AC\u30FC\u30EB\u30BA&\u30D1\u30F3\u30C4\u30A1\u30FC \u6700\u7D42\u7AE0", maker: "\u5E73\u548C", introducedAt: "2024.2.5", aliases: ["\u30AC\u30EB\u30D1\u30F3"] },
  { name: "Sky Love(\u30B9\u30AB\u30A4\u30E9\u30D6)", maker: "\u30CD\u30C3\u30C8", introducedAt: "2024.2.5", aliases: ["\u30B9\u30AB\u30A4\u30E9\u30D6"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30B3\u30FC\u30C9\u30AE\u30A2\u30B9 \u53CD\u9006\u306E\u30EB\u30EB\u30FC\u30B7\u30E5/\u5FA9\u6D3B\u306E\u30EB\u30EB\u30FC\u30B7\u30E5", maker: "\u30B5\u30DF\u30FC", introducedAt: "2024.2.5", aliases: ["\u30B3\u30FC\u30C9\u30AE\u30A2\u30B9", "\u30AE\u30A2\u30B9"] },
  { name: "\u30B9\u30ED\u30C3\u30C8\u51B4\u3048\u306A\u3044\u5F7C\u5973\u306E\u80B2\u3066\u304B\u305F", maker: "\u30B5\u30DC\u30CF\u30CB", introducedAt: "2024.2.5", aliases: ["\u51B4\u3048\u30AB\u30CE"] },
  { name: "L \u4EEE\u9762\u30E9\u30A4\u30C0\u30FC 7RIDERS", maker: "SUN SUN SUN", introducedAt: "2024.1.9", aliases: ["\u4EEE\u9762\u30E9\u30A4\u30C0\u30FC"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED \u30DE\u30AF\u30ED\u30B9\u30D5\u30ED\u30F3\u30C6\u30A3\u30A24", maker: "SANKYO", introducedAt: "2024.1.9", aliases: ["\u30DE\u30AF\u30ED\u30B9F4"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C9\u2122 \u30F4\u30A3\u30EC\u30C3\u30B8", maker: "\u30A2\u30C7\u30EA\u30AA\u30F3", introducedAt: "2024.1.9", aliases: ["\u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C9\u30F4\u30A3\u30EC\u30C3\u30B8", "\u30D0\u30A4\u30AA\u30F4\u30A3\u30EC\u30C3\u30B8"] },
  { name: "\u5409\u5B97\uFF32\uFF29\uFF33\uFF29\uFF2E\uFF27", maker: "\u30B5\u30DC\u30CF\u30CB", introducedAt: "2024.1.9", aliases: ["\u5409\u5B97\u30E9\u30A4\u30B8\u30F3\u30B0"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u30D0\u30B8\u30EA\u30B9\u30AF\uFF5E\u7532\u8CC0\u5FCD\u6CD5\u5E16\uFF5E\u7D462 \u5929\u81B3 BLACK EDITION", maker: "\u30A8\u30EC\u30B3", introducedAt: "2023.12.18", aliases: ["\u30D0\u30B8\u30EA\u30B9\u30AF\u5929\u81B3", "\u5929\u81B3"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED\u82B1\u306E\u6176\u6B21\u301C\u4F50\u6E21\u653B\u3081\u306E\u7AE0\u301C", maker: "EXCITE", introducedAt: "2023.12.4", aliases: ["\u82B1\u306E\u6176\u6B21"] },
  { name: "L\u30E9\u30D6\u5B223\u301CW\u3054\u6307\u540D\u306F\u3044\u304B\u304C\u3067\u3059\u304B\uFF1F\u301C", maker: "\u30A2\u30E0\u30C6\u30C3\u30AF\u30B9", introducedAt: "2023.12.4", aliases: ["\u30E9\u30D6\u5B223"] },
  { name: "L\u30EA\u30F3\u30B0\u306B\u304B\u3051\u308D1V", maker: "\u30A8\u30D5", introducedAt: "2023.12.4", aliases: ["\u30EA\u30F3\u304B\u3051"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u30E2\u30F3\u30AD\u30FC\u30BF\u30FC\u30F3V", maker: "\u5C71\u4F50", introducedAt: "2023.12.4", aliases: ["\u30E2\u30F3\u30AD\u30FC\u30BF\u30FC\u30F3", "\u30E2\u30F3\u30AD\u30FC\u30BF\u30FC\u30F3V"] },
  { name: "\u30DE\u30B8\u30AB\u30EB\u30CF\u30ED\u30A6\u30A3\u30F38", maker: "\u30B3\u30CA\u30DF\u30A2\u30DF\u30E5\u30FC\u30BA\u30E1\u30F3\u30C8", introducedAt: "2023.12.4", aliases: ["\u30DE\u30B8\u30CF\u30ED8"] },
  { name: "\u30D1\u30C1\u30B9\u30ED \u30B1\u30F3\u30AC\u30F3\u30A2\u30B7\u30E5\u30E9", maker: "\u30CD\u30C3\u30C8", introducedAt: "2023.11.20", aliases: ["\u30B1\u30F3\u30AC\u30F3\u30A2\u30B7\u30E5\u30E9"] },
  { name: "L\u3068\u3042\u308B\u9B54\u8853\u306E\u7981\u66F8\u76EE\u9332", maker: "JFJ", introducedAt: "2023.11.6", aliases: ["\u7981\u66F8\u76EE\u9332", "\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED\u3072\u3050\u3089\u3057\u306E\u306A\u304F\u9803\u306B", maker: "\u30C7\u30A3\u30FB\u30E9\u30A4\u30C8", introducedAt: "2023.11.6", aliases: ["\u3072\u3050\u3089\u3057"] },
  { name: "L\u5927\u5DE5\u306E\u6E90\u3055\u3093 \u8D85\u5922\u6E90", maker: "\u30B5\u30F3\u30B9\u30EA\u30FC", introducedAt: "2023.11.6", aliases: ["\u6E90\u3055\u3093"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u5287\u5834\u7248 \u9B54\u6CD5\u5C11\u5973\u307E\u3069\u304B\u2606\u30DE\u30AE\u30AB[\u524D\u7DE8]\u59CB\u307E\u308A\u306E\u7269\u8A9E\uFF0F[\u5F8C\u7DE8]\u6C38\u9060\u306E\u7269\u8A9Ef-\u30D5\u30A9\u30EB\u30C6-", maker: "\u30E1\u30FC\u30B7\u30FC", introducedAt: "2023.11.6", aliases: ["\u307E\u3069\u30DE\u30AE\u30D5\u30A9\u30EB\u30C6", "\u307E\u3069\u30DE\u30AE"] },
  { name: "\uFF2C\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3\uFF5E\u672A\u6765\u3078\u306E\u5275\u9020\uFF5E", maker: "\u30D3\u30B9\u30C6\u30A3", introducedAt: "2023.10.2", aliases: ["\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u8EE2\u751F\u3057\u305F\u3089\u30B9\u30E9\u30A4\u30E0\u3060\u3063\u305F\u4EF6", maker: "\u5C71\u4F50", introducedAt: "2023.10.2", aliases: ["\u8EE2\u30B9\u30E9"] },
  { name: "\u6226\u56FD\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\uFF15\u8D85\u6975\u697DLOOP", maker: "\u30B3\u30CA\u30DF\u30A2\u30DF\u30E5\u30FC\u30BA\u30E1\u30F3\u30C8", introducedAt: "2023.9.19", aliases: ["\u6226\u30B3\u30EC5"] },
  { name: "\u9EBB\u96C0\u683C\u95D8\u5036\u697D\u90E8 \u899A\u9192", maker: "\u30B3\u30CA\u30DF\u30A2\u30DF\u30E5\u30FC\u30BA\u30E1\u30F3\u30C8", introducedAt: "2023.9.19", aliases: ["\u9EBB\u96C0\u683C\u95D8\u5036\u697D\u90E8"] },
  { name: "L009 RE:CYBORG", maker: "\u30CB\u30E5\u30FC\u30AE\u30F3", introducedAt: "2023.9.4", aliases: ["009"] },
  { name: "L\u6226\u56FD\u4E59\u59734 \u6226\u4E71\u306B\u9583\u304F\u70AF\u773C\u306E\u8ECD\u5E2B", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2\u30A8\u30B9\u30C6\u30FC\u30C8", introducedAt: "2023.9.4", aliases: ["\u6226\u56FD\u4E59\u59734"] },
  { name: "L\u30D1\u30C1\u30B9\u30ED\u4E43\u6728\u574246", maker: "SUN SUN SUN", introducedAt: "2023.8.7", aliases: ["\u4E43\u6728\u574246"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u6226\u56FDBASARA GIGA", maker: "\u30A8\u30F3\u30BF\u30FC\u30E9\u30A4\u30BA", introducedAt: "2023.8.7", aliases: ["\u6226\u56FDBASARA"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u30AD\u30F3\u8089\u30DE\u30F3\u301C7\u4EBA\u306E\u60AA\u9B54\u8D85\u4EBA\u7DE8\u301C", maker: "\u30BB\u30D6\u30F3\u30EA\u30FC\u30B0", introducedAt: "2023.8.7", aliases: ["\u30AD\u30F3\u8089\u30DE\u30F3"] },
  { name: "\u9632\u7A7A\u5C11\u5973\u30E9\u30D6\u30AD\u30E5\u30FC\u30EC2\u301C\u6975\u9650\u306E\u5171\u9CF4\u301C", maker: "KPE", introducedAt: "2023.8.7", aliases: ["\u30E9\u30D6\u30AD\u30E5\u30FC\u30EC2"] },
  { name: "\u30B9\u30DE\u30B9\u30ED \u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C9:\u30F4\u30A7\u30F3\u30C7\u30C3\u30BF", maker: "\u30ED\u30C7\u30AA", introducedAt: "2023.7.24", aliases: ["\u30D0\u30A4\u30AA\u30CF\u30B6\u30FC\u30C9\u30F4\u30A7\u30F3\u30C7\u30C3\u30BF", "\u30D0\u30A4\u30AA\u30F4\u30A7\u30F3\u30C7\u30C3\u30BF"] },
  { name: "\u30D1\u30C1\u30B9\u30ED \u304B\u3089\u304F\u308A\u30B5\u30FC\u30AB\u30B9", maker: "SANKYO", introducedAt: "2023.7.3", aliases: ["\u304B\u3089\u304F\u308A\u30B5\u30FC\u30AB\u30B9"] },
  { name: "L\u30D9\u30EB\u30BB\u30EB\u30AF\u7121\u53CC", maker: "EXCITE", introducedAt: "2023.6.5", aliases: ["\u30D9\u30EB\u30BB\u30EB\u30AF\u7121\u53CC"] },
  { name: "\u3071\u3061\u30B9\u30ED \u306B\u3083\u3093\u3053\u5927\u6226\u4E89 BIGBANG", maker: "\u4EAC\u697D\u7523\u696D.", introducedAt: "2023.6.5", aliases: ["\u306B\u3083\u3093\u3053\u5927\u6226\u4E89"] },
  { name: "\u30B9\u30ED\u30C3\u30C8 \u30BD\u30FC\u30C9\u30A2\u30FC\u30C8\u30FB\u30AA\u30F3\u30E9\u30A4\u30F3", maker: "\u5927\u90FD\u6280\u7814", introducedAt: "2023.5.15", aliases: ["SAO"] },
  { name: "L\u4E3B\u5F79\u306F\u92AD\u5F624", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2", introducedAt: "2023.5.8", aliases: ["\u4E3B\u5F79\u306F\u92AD\u5F624", "\u92AD\u5F624"] },
  { name: "L\u30B4\u30D6\u30EA\u30F3\u30B9\u30EC\u30A4\u30E4\u30FC", maker: "\u30AA\u30EC\u30F3\u30B8", introducedAt: "2023.4.17", aliases: ["\u30B4\u30D6\u30EA\u30F3\u30B9\u30EC\u30A4\u30E4\u30FC"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u5317\u6597\u306E\u62F3", maker: "\u30BF\u30A4\u30E8\u30FC\u30A8\u30EC\u30C3\u30AF", introducedAt: "2023.4.3", aliases: ["\u5317\u6597\u306E\u62F3"] },
  { name: "\uFF28\uFF25\uFF39\uFF01\u30A8\u30EA\u30FC\u30C8\u30B5\u30E9\u30EA\u30FC\u30DE\u30F3\u93E1", maker: "\u30D1\u30AA\u30F3\u30FB\u30C7\u30A3\u30FC\u30D4\u30FC", introducedAt: "2022.12.5", aliases: ["\u93E1", "\u30B5\u30E9\u30EA\u30FC\u30DE\u30F3\u93E1"] },
  { name: "L\u30D0\u30AD \u5F37\u304F\u306A\u308A\u305F\u304F\u3070\u55B0\u3089\u3048\uFF01\uFF01\uFF01", maker: "\u30AA\u30EA\u30F3\u30D4\u30A2", introducedAt: "2022.11.21", aliases: ["\u30D0\u30AD"] },
  { name: "\u30B9\u30DE\u30B9\u30ED\u30EA\u30CE\u30D8\u30D6\u30F3", maker: "\u5C71\u4F50", introducedAt: "2022.11.21", aliases: ["\u30EA\u30CE\u30D8\u30D6\u30F3"] },
  { name: "\u30D1\u30C1\u30B9\u30ED \u9769\u547D\u6A5F\u30F4\u30A1\u30EB\u30F4\u30EC\u30A4\u30F4", maker: "SANKYO", introducedAt: "2022.11.21", aliases: ["\u30F4\u30A1\u30EB\u30F4\u30EC\u30A4\u30F4", "\u30F4\u30F4\u30F4"] }
];
const normalizeMachineText = (value) => (value || "").toString().toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 65248)).replace(/[‐‑‒–—―ー－\-~〜～・･\s　!！?？()（）[\]【】「」『』™]/g, "");
const uniqueValues = (values) => {
  const seen = /* @__PURE__ */ new Set();
  return values.filter((value) => {
    const key = normalizeMachineText(value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};
const SAMMY_MAKER_ALIASES = ["\u9280\u5EA7", "\u30ED\u30C7\u30AA", "\u30BF\u30A4\u30E8\u30FC\u30A8\u30EC\u30C3\u30AF"];
const MACHINE_DISPLAY_PRIORITY = ["\u5317\u6597\u8EE2\u751F\uFF12", "\u6771\u4EAC\u55B0\u7A2E", "L\u30B4\u30C3\u30C9\u8ECC\u8DE1"];
const CALENDAR_WEEKDAYS = ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"];
const TARGET_PRESETS = [
  {
    id: "hokuto-tensei",
    machineMatchers: ["\u5317\u6597\u8EE2\u751F\uFF12", "\u5317\u6597\u8EE2\u751F2", "\u30B9\u30DE\u30B9\u30ED \u5317\u6597\u306E\u62F3 \u8EE2\u751F\u306E\u7AE02"],
    targets: [
      { label: "AT\u5F8C\u30B7\u30E3\u30C3\u30BF\u30FC", payoutRate: "106" },
      { label: "\u30EA\u30BB\u30B7\u30E3\u30C3\u30BF\u30FC", payoutRate: "107.5" }
    ]
  },
  {
    id: "god-kiseki",
    machineMatchers: ["L\u30B4\u30C3\u30C9\u8ECC\u8DE1", "\u30B9\u30DE\u30B9\u30ED \u30DF\u30EA\u30AA\u30F3\u30B4\u30C3\u30C9-\u795E\u3005\u306E\u8ECC\u8DE1-", "\u30DF\u30EA\u30AA\u30F3\u30B4\u30C3\u30C9", "\u795E\u3005\u306E\u8ECC\u8DE1"],
    targets: [
      { label: "\u8D647\uFF061400\u679A\u672A\u6E80\u5F8C", payoutRate: "106" }
    ]
  }
];
const CURRENT_ENVIRONMENT_NOTE = {
  updatedAt: "8\u67086\u65E5\u7248",
  title: "\u73FE\u74B0\u5883\u306B\u3064\u3044\u3066",
  body: "8\u6708\u306E\u5927\u91CF\u65B0\u53F0\u306B\u3088\u308A\u8EE2\u751F\u306E\u53F0\u6570\u304C\u76F8\u5F53\u6E1B\u3063\u3066\u3057\u307E\u3063\u305F\u3002\n\u305D\u308C\u3067\u3082\u62FE\u3063\u3066\u3057\u307E\u3048\u3070\u9577\u304F\u6253\u3066\u308B\u512A\u4F4D\u6027\u306F\u5909\u308F\u3089\u306A\u3044\u306E\u3067S\u3067\u636E\u3048\u7F6E\u304D\u3002\n\n\u5C11\u3057\u524D\u306E\u3088\u3046\u306BGOD\u3084\u8EE2\u751F\u3001\u55B0\u7A2E\u306E\u3088\u3046\u306A1\u6A5F\u7A2E\u306B\u7279\u5316\u3057\u3066\u8EF8\u306B\u7A3C\u50CD\u3059\u308B\u3068\u3044\u3046\u3088\u308A\u306F\u3001\u591A\u304F\u306E\u6A5F\u7A2E\u3092\u96D1\u591A\u306B\u89E6\u308C\u306A\u3044\u3068\u3044\u3051\u306A\u3044\u74B0\u5883\u306B\u306A\u3063\u3066\u304D\u305F\u3002\n\n\u65B0\u53F0\u3092\u3057\u3063\u304B\u308A\u62FE\u3044\u305F\u3044\u3002"
};
const ENVIRONMENT_ARCHIVE_ENTRIES = [
  {
    number: "01",
    title: "8\u67086\u65E5\u7248 \u73FE\u74B0\u5883\u306B\u3064\u3044\u3066",
    body: CURRENT_ENVIRONMENT_NOTE.body,
    quote: "\u8EE2\u751F\u306FS\u7DAD\u6301\u30021\u6A5F\u7A2E\u7279\u5316\u3088\u308A\u3082\u3001\u65B0\u53F0\u3092\u542B\u3081\u3066\u5E83\u304F\u89E6\u308B\u74B0\u5883\u3078\u3002"
  },
  {
    number: "02",
    title: "7/15\u66F4\u65B0 \u73FE\u74B0\u5883\u306B\u3064\u3044\u3066",
    body: "GOD\u304C\u6025\u6FC0\u306B\u62FE\u3048\u306A\u304F\u306A\u3063\u305F\u306E\u3067S\u2192A\u306B\u3002\n\u8EE2\u751F\u3082\u76F8\u5F53\u53F0\u6570\u6E1B\u3063\u305F\u304C1\u53F0\u9577\u304F\u6253\u3066\u308B\u306E\u3067S\u7DAD\u6301\u3002\n\n\u5148\u6708\u3088\u308A\u53B3\u3057\u3044\u74B0\u5883\u3068\u306A\u3063\u305F\u3002\n\n\u4ECA\u306F\u6226\u30B3\u30EC\uFF16\u304C\u6CE8\u76EE\u682A\u3002\n4\u6708\u4EE5\u964D\u306E\u30B3\u30F3\u30D7\u898F\u5236\u5F37\u5316\u3092\u5BFE\u7B56\u3092\u3057\u305F\u6B6A\u3093\u3060\u7206\u88C2\u6A5F\u304C\u3053\u308C\u304B\u3089\u3044\u308D\u3044\u308D\u51FA\u305D\u3046\u3067\u306F\u3042\u308B\u306E\u3067\u671F\u5F85\u3002",
    quote: "\u5148\u6708\u3088\u308A\u53B3\u3057\u3044\u74B0\u5883\u3002GOD\u306FA\u3078\u3001\u8EE2\u751F\u306FS\u7DAD\u6301\u3001\u6226\u30B3\u30EC6\u306B\u6CE8\u76EE\u3002"
  }
];
const normalizeMachineMaker = (maker) => SAMMY_MAKER_ALIASES.includes(maker) ? "\u30B5\u30DF\u30FC" : maker || "";
const machinePriority = (option) => {
  const searchText = normalizeMachineText([option.name, ...option.aliases || []].join(" "));
  const index = MACHINE_DISPLAY_PRIORITY.findIndex((name) => searchText.includes(normalizeMachineText(name)));
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};
const findTargetPreset = (machineName) => {
  const normalizedMachineName = normalizeMachineText(machineName);
  return TARGET_PRESETS.find((preset) => preset.machineMatchers.some((matcher) => normalizedMachineName.includes(normalizeMachineText(matcher))));
};
const calculateWorkValue = (payoutRate, playTime) => {
  const rate = parseFloat(payoutRate) || 100;
  const time = parseFloat(playTime) || 0;
  const hourlyWage = (rate - 100) * 500;
  return Math.round(hourlyWage * (time / 60));
};
const estimatePlayCountFromTime = (playTime) => {
  const time = parseFloat(playTime);
  return Number.isFinite(time) ? Math.round(time / 60 * 800).toString() : "";
};
const estimatePlayTimeFromCount = (playCount) => {
  const count = parseFloat(playCount);
  return Number.isFinite(count) ? Math.round(count / 800 * 60).toString() : "";
};
const parseClockTimeToMinutes = (time) => {
  if (!time || !time.includes(":")) return null;
  const [hours, minutes] = time.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return null;
  return hours * 60 + minutes;
};
const calculateTimeRangeMinutes = (startTime, endTime) => {
  const startMinutes = parseClockTimeToMinutes(startTime);
  const endMinutes = parseClockTimeToMinutes(endTime);
  if (startMinutes === null || endMinutes === null) return "";
  let duration = endMinutes - startMinutes;
  if (duration < 0) duration += 24 * 60;
  return duration;
};
const formatClockTime = (date = /* @__PURE__ */ new Date()) => `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
const EMPTY_WORKLOAD_FORM = {
  machineName: "",
  payoutRate: "105",
  startTime: "",
  endTime: "",
  playTime: "60",
  playCount: "800",
  memo: ""
};
const readLocalWorkloadBackup = () => {
  try {
    const saved = localStorage.getItem(WORKLOAD_STORAGE_KEY);
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch (e) {
    console.error("\u4ED5\u4E8B\u91CF\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u30A8\u30E9\u30FC:", e);
    return {};
  }
};
const hasLocalWorkloadBackup = () => Object.values(readLocalWorkloadBackup()).some((items) => Array.isArray(items) && items.length > 0);
const normalizeWorkloadRow = (row) => ({
  id: row.id,
  date: row.date,
  machineName: row.machine_name || "",
  payoutRate: row.payout_rate === null || row.payout_rate === void 0 ? "" : row.payout_rate.toString(),
  playTime: row.play_time === null || row.play_time === void 0 ? "" : row.play_time.toString(),
  playCount: row.play_count === null || row.play_count === void 0 ? "" : row.play_count.toString(),
  memo: row.memo || "",
  workValue: Number(row.work_value) || 0,
  createdAt: row.created_at
});
const addMachineOption = (list, index, option) => {
  const aliases = uniqueValues([...option.aliases || [], option.detail, option.tag].filter(Boolean));
  const dedupeAliases = uniqueValues(option.dedupeAliases || []);
  const keys = uniqueValues([option.name, ...dedupeAliases]);
  const duplicate = keys.map(normalizeMachineText).find((key) => index.has(key));
  const maker = normalizeMachineMaker(option.maker);
  if (duplicate) {
    const existing = index.get(duplicate);
    existing.aliases = uniqueValues([...existing.aliases, option.name, ...aliases].filter(Boolean));
    existing.dedupeAliases = uniqueValues([...existing.dedupeAliases || [], ...dedupeAliases]);
    if ((!existing.maker || existing.maker === "Tier\u8868") && maker) existing.maker = maker;
    if (!existing.introducedAt && option.introducedAt) existing.introducedAt = option.introducedAt;
    uniqueValues([existing.name, ...existing.dedupeAliases || []]).map(normalizeMachineText).forEach((key) => index.set(key, existing));
    return;
  }
  const nextOption = {
    name: option.name,
    maker,
    introducedAt: option.introducedAt || "",
    aliases,
    dedupeAliases
  };
  list.push(nextOption);
  keys.map(normalizeMachineText).forEach((key) => index.set(key, nextOption));
};
const buildMachineOptions = (rukoItems) => {
  const list = [];
  const index = /* @__PURE__ */ new Map();
  rukoItems.filter((item) => item && item.name && item.tier !== "\u5185\u90E8\u4ED5\u69D8" && item.name !== "\u30B3\u30F3\u30D7\u5BFE\u7B56").forEach((item) => {
    const officialAliases = TIER_MACHINE_ALIAS_MAP[item.name] || [];
    addMachineOption(list, index, {
      name: item.name,
      maker: "",
      introducedAt: "",
      aliases: [...officialAliases, item.detail, item.tag].filter(Boolean),
      dedupeAliases: officialAliases.slice(0, 1)
    });
  });
  SMART_SLOT_MACHINE_OPTIONS.forEach((option) => addMachineOption(list, index, option));
  return list.map((option, order) => ({ ...option, order })).sort((a, b) => machinePriority(a) - machinePriority(b) || a.order - b.order);
};
const STRATEGY_SECTION_DATA = [
  {
    id: "store",
    title: "\u5E97\u8217\u9078\u3073\u306B\u3064\u3044\u3066",
    subtitle: "\u62FE\u3048\u308B\u74B0\u5883\u3092\u5148\u306B\u9078\u3076",
    icon: Building2,
    accent: "blue",
    items: [
      {
        number: "01",
        title: "1or6\u306E\u30D4\u30F3\u30AD\u30EA\u55B6\u696D\u3088\u308A\u30012\u301C5\u306E\u4E2D\u9593\u55B6\u696D\u3092\u72D9\u3046",
        body: "\u8A2D\u5B9A\u72D9\u3044\u306E\u5834\u5408\u306F\u4E0A\u4E0B\u304C\u306F\u3063\u304D\u308A\u3057\u3066\u3044\u305F\u65B9\u304C\u898B\u5207\u308A\u304C\u65E9\u304F\u3066\u5F97\u3060\u304C\u3001\u30A8\u30CA\u306E\u5834\u5408\u306F\u666E\u6BB5\u62FE\u3046\u53F0\u306B\u4E2D\u9593\u304C\u6DF7\u3058\u3063\u3066\u3044\u305F\u65B9\u304C\u6F5C\u5728\u7684\u306A\u671F\u5F85\u5024\u304C\u9AD8\u304F\u306A\u3063\u3066\u5F97\u3092\u3059\u308B\u3002\u7279\u5B9A\u65E5\u3067\u30826\u304C\u4E2D\u3005\u3067\u306A\u3044\u5E97\u306F\u88CF\u3092\u8FD4\u305B\u3070\u5E73\u5E38\u65E5\u306B\u4E2D\u9593\u8A2D\u5B9A\u3067\u904A\u3070\u305B\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u9AD8\u304F\u306A\u308B\u306E\u3067\u30A8\u30CA\u5E97\u3068\u3057\u3066\u306F\u512A\u79C0\u3060\u3068\u5224\u65AD\u3067\u304D\u308B\u3002\u5E73\u5E38\u65E5\u304B\u3089\u9285\u30FB\u9280\u30C8\u30ED\u304C\u983B\u767A\u3059\u308B\u5E97\u306E\u512A\u5148\u5EA6\u3092\u4E0A\u3052\u3088\u3046\u3002",
        highlights: ["\u7279\u5B9A\u65E5\u3067\u30826\u304C\u4E2D\u3005\u3067\u306A\u3044\u5E97\u306F\u88CF\u3092\u8FD4\u305B\u3070\u5E73\u5E38\u65E5\u306B\u4E2D\u9593\u8A2D\u5B9A\u3067\u904A\u3070\u305B\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u9AD8\u304F\u306A\u308B"],
        quote: "\u30A8\u30CA\u7684\u306B\u306F\u4E2D\u9593\u8A2D\u5B9A\u304C\u591A\u3044\u5E97\u304C\u512A\u826F\u5E97"
      },
      {
        number: "02",
        title: "\u7B49\u4FA1\u5E97\u3088\u308A\u3082\u975E\u7B49\u4FA1\u5E97\u3092\u512A\u5148\u3057\u3066\u4F7F\u3046",
        body: "\u975E\u7B49\u4FA1\u5E97\u306F\u4EA4\u63DB\u30AE\u30E3\u30C3\u30D7\u3067\u5229\u76CA\u3092\u4F5C\u308C\u308B\u5206\u3001\u7B49\u4FA1\u5E97\u3088\u308A\u3082\u30D9\u30FC\u30B9\u8A2D\u5B9A\u304C\u9AD8\u304F\u306A\u308A\u3084\u3059\u3044\u3002\u7B49\u4FA1\u5E97\u306F\u8A2D\u5B9A1\u4E2D\u5FC3\u306B\u306A\u308A\u304C\u3061\u3060\u304C\u3001\u975E\u7B49\u4FA1\u5E97\u3067\u306F\u6700\u4F4E\u8A2D\u5B9A\u30922\u306B\u3057\u3066\u904A\u3070\u305B\u3066\u3044\u308B\u5E97\u3082\u591A\u3044\u3002\u518D\u30D7\u30EC\u30A4\u306E\u7BC4\u56F2\u5185\u3067\u6253\u3066\u3070\u4EA4\u63DB\u30AE\u30E3\u30C3\u30D7\u306E\u30C7\u30E1\u30EA\u30C3\u30C8\u3092\u907F\u3051\u306A\u304C\u3089\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306E\u9AD8\u3055\u3060\u3051\u3092\u53D6\u308A\u306B\u3044\u3051\u308B\u3002\u3088\u3063\u3066\u975E\u7B49\u4FA1\u5E97\u3092\u8907\u6570\u5E97\u8217\u3092\u56DE\u308B\u306E\u304C\u57FA\u672C\u3002\u6301\u3061\u7389\u304C\u3067\u304D\u305F\u5E97\u3067\u306F\u7121\u7406\u306B\u306F\u3057\u3054\u3057\u306A\u304F\u3066\u826F\u3044\u3002",
        highlights: ["\u518D\u30D7\u30EC\u30A4\u306E\u7BC4\u56F2\u5185\u3067\u6253\u3066\u3070\u4EA4\u63DB\u30AE\u30E3\u30C3\u30D7\u306E\u30C7\u30E1\u30EA\u30C3\u30C8\u3092\u907F\u3051\u306A\u304C\u3089\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306E\u9AD8\u3055\u3060\u3051\u3092\u53D6\u308A\u306B\u3044\u3051\u308B\u3002\u3088\u3063\u3066\u975E\u7B49\u4FA1\u5E97\u3092\u8907\u6570\u5E97\u8217\u3092\u56DE\u308B\u306E\u304C\u57FA\u672C\u3002"],
        quote: "\u975E\u7B49\u4FA1\u5E97\u3067\u518D\u30D7\u30EC\u30A4\u5206\u3060\u3051\u306F\u3057\u3054\u3059\u308B\u306E\u304C\u6700\u9069\u89E3\n\uFF08\u6301\u3061\u7389\u3067\u304D\u305F\u3089\u305D\u3053\u3067\u30B8\u30B0\u30DE\uFF09"
      },
      {
        number: "03",
        title: "\u305D\u306E\u6642\u8EF8\u306B\u3057\u3066\u3044\u308B\u6A5F\u7A2E\u306E\u6271\u3044\u304C\u826F\u3044\u5E97\u3092\u9078\u3076",
        body: "\u30B4\u30C3\u30C9\u3084\u55B0\u7A2E\u306A\u3069\u3001\u305D\u306E\u6642\u671F\u306B\u4E00\u756A\u62FE\u3046\u983B\u5EA6\u304C\u9AD8\u3044\u6A5F\u7A2E\u304C\u9031\u9593\u304A\u3059\u3059\u3081\u6A5F\u7A2E\u306B\u306A\u3063\u3066\u3044\u305F\u308A\u3001\u5E97\u304C\u5C11\u3057\u3067\u3082\u8A2D\u5B9A\u3092\u4F7F\u3063\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u306A\u3089\u512A\u5148\u5EA6\u3092\u4E0A\u3052\u305F\u3044\u3002\u7518\u3044\u30E9\u30A4\u30F3\u3060\u3051\u6253\u3061\u3001\u30C8\u30ED\u30D5\u30A3\u30FC\u3084\u78BA\u5B9A\u7CFB\u304C\u51FA\u305F\u6642\u3060\u3051\u8FFD\u3046\u3068\u3044\u3046\u30D5\u30A9\u30ED\u30FC\u3082\u53D6\u308A\u3084\u3059\u304F\u306A\u308B\u3002\u305F\u3060\u3057\u671D\u30A4\u30C1\u304B\u3089\u5168\u53F0\u57CB\u307E\u308B\u307B\u3069\u306E\u4FE1\u983C\u5EA6\u3060\u3068\u9006\u306B\u62FE\u3048\u306A\u3044\u306E\u3067\u3001\u7A3C\u50CD\u7387\u306F\u9AD8\u3059\u304E\u306A\u3044\u65B9\u304C\u3044\u3044\u3002\u76EE\u5B89\u3068\u3057\u3066\u306F\u3001\u7A7A\u304D\u53F0\u3082\u6B8B\u308B50\uFF05\u524D\u5F8C\u306E\u5E97\u304C\u4E00\u756A\u52D5\u304D\u3084\u3059\u3044\u3002",
        highlights: ["\u305F\u3060\u3057\u671D\u30A4\u30C1\u304B\u3089\u5168\u53F0\u57CB\u307E\u308B\u307B\u3069\u306E\u4FE1\u983C\u5EA6\u3060\u3068\u9006\u306B\u62FE\u3048\u306A\u3044\u306E\u3067\u3001\u7A3C\u50CD\u7387\u306F\u9AD8\u3059\u304E\u306A\u3044\u65B9\u304C\u3044\u3044\u3002"],
        quote: "\u3088\u304F\u62FE\u3046\u6A5F\u7A2E\u3092\u5C11\u3057\u3067\u3082\u7518\u304F\u6253\u3066\u308B\u5E97\u3092\u512A\u5148\u3057\u3088\u3046"
      }
    ]
  },
  {
    id: "machine",
    title: "\u6A5F\u7A2E\u653B\u7565\u306B\u3064\u3044\u3066",
    subtitle: "\u53F0\u306E\u6B6A\u307F\u3068\u512A\u9047\u3092\u62FE\u3046",
    icon: Cpu,
    accent: "red",
    items: [
      {
        number: "01",
        title: "\u30DE\u30A4\u30EB\u30C9\u306A\u6A5F\u7A2E\u3088\u308A\u3082\u8352\u3044\u6A5F\u7A2E\u3092\u72D9\u3046\u3088\u3046\u306B\u3059\u308B",
        body: "\u7D14\u5897\u304C\u65E9\u3044\u53F0\u3001AT\u4E00\u6483\u306E\u5E73\u5747\u7372\u5F97\u679A\u6570\u304C\u591A\u3044\u53F0\u3002\u3053\u3046\u3044\u3046\u8352\u3044\u53F0\u306F\u4F55\u304B\u3057\u3089\u306E\u6B6A\u3093\u3060\u30B2\u30FC\u30E0\u6027\u3092\u7D44\u307F\u8FBC\u307E\u306A\u3044\u3068\u578B\u5F0F\u8A66\u9A13\u3092\u7A81\u7834\u3067\u304D\u306A\u3044\u3002\u53CE\u652F\u306E\u5B89\u5B9A\u3092\u6C42\u3081\u3066\u8352\u3044\u53F0\u304B\u3089\u907F\u3051\u3088\u3046\u3068\u3059\u308B\u3068\u671F\u5F85\u5024\u306E\u4F4E\u3044\u7A3C\u50CD\u306B\u306A\u3063\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u591A\u3044\u74B0\u5883\u306A\u306E\u3067\u6CE8\u610F\u3057\u3088\u3046\u3002\u65B0\u53F0\u304C\u51FA\u305F\u3068\u304D\u306F\u307E\u305A\u306F\u30B3\u30A4\u30F3\u5358\u4FA1\u3084\u7D14\u5897\u304B\u3089\u8352\u305D\u3046\u306A\u53F0\u3092\u307F\u3064\u3051\u3066\u304B\u3089\u300C\u3053\u306E\u30E1\u30FC\u30AB\u30FC\u306A\u3089\u3053\u3053\u3089\u3078\u3093\u306B\u8A66\u9A13\u7A81\u7834\u306E\u305F\u3081\u306E\u4ED5\u69D8\u304F\u307F\u3053\u3093\u3067\u305D\u3046\u3060\u306A\u3042\u300D\u306A\u3069\u63A8\u6E2C\u3059\u308B\u3002",
        highlights: ["\u3053\u3046\u3044\u3046\u8352\u3044\u53F0\u306F\u4F55\u304B\u3057\u3089\u306E\u6B6A\u3093\u3060\u30B2\u30FC\u30E0\u6027\u3092\u7D44\u307F\u8FBC\u307E\u306A\u3044\u3068\u578B\u5F0F\u8A66\u9A13\u3092\u7A81\u7834\u3067\u304D\u306A\u3044\u3002", "\u3053\u306E\u30E1\u30FC\u30AB\u30FC\u306A\u3089\u3053\u3053\u3089\u3078\u3093\u306B\u8A66\u9A13\u7A81\u7834\u306E\u305F\u3081\u306E\u4ED5\u69D8\u304F\u307F\u3053\u3093\u3067\u305D\u3046\u3060\u306A\u3042"],
        quote: "\u30B3\u30A4\u30F3\u5358\u4FA1\u9AD8\u3044\u53F0\u3092\u3080\u3057\u308D\u9032\u3093\u3067\u653B\u7565\u3057\u3066\u72D9\u3046\u3088\u3046\u306B\u3057\u3088\u3046"
      },
      {
        number: "02",
        title: "\u5DEE\u679A\u72D9\u3044\u3068\u512A\u9047\u72D9\u3044\u3092\u6975\u3081\u308B",
        body: "\u60C5\u5831\u5316\u793E\u4F1A\u306E\u4E2D\u3067\u4E00\u822C\u5C64\u3082\u305F\u3060\u306E\u5929\u4E95\u72D9\u3044\u306F\u77E5\u3063\u3066\u3044\u3066\u30E9\u30A4\u30D0\u30EB\u304C\u591A\u3044\u3002\u305D\u306E\u4E2D\u3067\u5DEE\u5225\u5316\u3059\u308B\u306B\u306F\u5C65\u6B74\u8AAD\u307F\u304C\u8907\u96D1\u306A\u7279\u6B8A\u306A\u72D9\u3044\u65B9\u3092\u3059\u308B\u3057\u304B\u306A\u3044\u3002\u6A5F\u7A2E\u3054\u3068\u306B\u3088\u308B\u7279\u6B8A\u4ED5\u69D8\u3092\u899A\u3048\u308B\u305F\u3081\u306B\u3082\u5927\u304D\u306A2\u8EF8\u306B\u306A\u308B\u5DEE\u679A\u72D9\u3044\u3068\u512A\u9047\u72D9\u3044\u306E\u8003\u3048\u65B9\u306F\u3057\u3063\u304B\u308A\u7406\u89E3\u3057\u3066\u304A\u304D\u305F\u3044\u3002",
        highlights: ["\u305D\u306E\u4E2D\u3067\u5DEE\u5225\u5316\u3059\u308B\u306B\u306F\u5C65\u6B74\u8AAD\u307F\u304C\u8907\u96D1\u306A\u7279\u6B8A\u306A\u72D9\u3044\u65B9\u3092\u3059\u308B\u3057\u304B\u306A\u3044\u3002"],
        quote: "\u30DE\u30A4\u30EB\u30C9\u53F0\uFF1D\u5DEE\u679A\u72D9\u3044 / \u8352\u3044\u53F0\uFF1D\u512A\u9047\u72D9\u3044\u306F\u5E38\u306B\u610F\u8B58\u3057\u3088\u3046"
      },
      {
        number: "03",
        title: "\u30A8\u30CA\u7A3C\u50CD\u3067\u3082\u8A2D\u5B9A\u5DEE\u3092\u3057\u3063\u304B\u308A\u628A\u63E1\u3057\u3066\u304A\u304F",
        body: "\u30A8\u30CA\u3067\u62FE\u3063\u3066\u3044\u308B\u4E2D\u3067\u8A2D\u5B9A\u5DEE\u306E\u5927\u304D\u3044\u6319\u52D5\u3092\u4F55\u56DE\u3082\u6253\u3064\u6A5F\u4F1A\u304C\u3042\u308B\u306A\u3089\u3001\u305D\u306E\u5E97\u306E\u305D\u306E\u6A5F\u7A2E\u306E\u6271\u3044\u304C\u826F\u3044\u3053\u3068\u304C\u5206\u304B\u308B\u3002\u305D\u3046\u306A\u308B\u3068\u666E\u6BB5\u62FE\u3046\u30DC\u30FC\u30C0\u30FC\u3092\u4E0B\u3052\u308B\u3053\u3068\u304C\u3067\u304D\u3066\u30E9\u30A4\u30D0\u30EB\u304C\u6E1B\u308B\u3002",
        quote: "\u81EA\u5206\u3060\u3051\u3057\u304B\u77E5\u3089\u306A\u3044\u60C5\u5831\u3067\u5468\u308A\u3068\u5DEE\u3092\u4ED8\u3051\u3088\u3046"
      }
    ]
  },
  {
    id: "augustNewMachines",
    title: "8\u6708\u65B0\u53F0\u306E\u72D9\u3044\u76EE\u8003\u5BDF",
    subtitle: "\u65B0\u53F0\u306E\u62FE\u3048\u305D\u3046\u306A\u6B6A\u307F\u3092\u6574\u7406",
    icon: Calendar,
    accent: "red",
    hiddenFromStrategyIndex: true,
    items: [
      {
        number: "01",
        title: "L\u3068\u3042\u308B\u9B54\u8853\u306E\u7981\u66F8\u76EE\u93322",
        body: "\u2460\u9006\u8EE2\u30C6\u30FC\u30D6\u30EB\u72D9\u3044\uFF08\u7A62\u308C\uFF09\u304C\u8EF8\u306B\u306A\u308A\u305D\u3046\n\n\u2461\u30DD\u30A4\u30F3\u30C8\u6301\u3061\u8D8A\u3057\u7CFB\u306E\u53F0\u306A\u306E\u3067\u4E0D\u554F\u5373\u3084\u3081\u6761\u4EF6\u3088\u308A\u306F\u30DC\u30FC\u30C0\u30FC\u4E0B\u3052\u3089\u308C\u308B\n\n\u2462\u30EA\u30BB\u306F\u57FA\u672C\u7684\u306B\u8F9B\u3044\u306E\u3067\u3088\u3063\u307D\u3069\u5F37\u3044\u6253\u3061\u5206\u3051\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u3068\u6253\u3066\u306A\u3055\u305D\u3046",
        quote: "\u9006\u8EE2\u30C6\u30FC\u30D6\u30EB\u3068\u30DD\u30A4\u30F3\u30C8\u6301\u3061\u8D8A\u3057\u3092\u8EF8\u306B\u898B\u308B",
        link: "https://note.com/preview/ncb2e2abe6176?prev_access_key=70389930aed323d3117e3c76bc2c1f78"
      },
      {
        number: "02",
        title: "L\u30B9\u30C8\u30EA\u30FC\u30C8\u30D5\u30A1\u30A4\u30BF\u30FC6",
        body: "\u2460\u9244\u62F3\u3068\u540C\u3058\u3067\u30B9\u30EB\u30FC\u5929\u4E95\u306E\u4F4E\u3055\u306B\u5272\u304C\u53D6\u3089\u308C\u3066\u3044\u308B\u30BF\u30A4\u30D7\u30023\u30B9\u30EB\u30FC\u5929\u4E95\u306A\u306E\u30672\u30B9\u30EB\u30FC0G\u304B\u3089\u6253\u3066\u308B\u3002\n\uFF08AT\u99C6\u3051\u629C\u3051\uFF1D\u30B9\u30EB\u30FC\uFF09\n\n\u2461\u4E0A\u8A18\u4EE5\u5916\u610F\u8B58\u3059\u308B\u3053\u3068\u7121\u3057",
        quote: "2\u30B9\u30EB\u30FC0G\u301C\u3092\u8EF8\u306B\u898B\u308B"
      },
      {
        number: "03",
        title: "L\u3084\u3058\u304D\u305F\u9053\u4E2D\u8A18\u53C2\u308B",
        body: "\u2460\u6DB2\u6676900\u8D8A\u3048\u5F8C\u306F\u6DB2\u6676300\u4EE5\u5185\u5F53\u9078\u6FC3\u539A\u3068\u306A\u308B\u306E\u3067\u72D9\u3044\u76EE\u306B\u306A\u308B\n\u203B\u521D\u4EE3\u304B\u3089\u304F\u308A\u306F\u6DB2\u66761100\u306E\u624B\u524D\u306B1000\u3067\u5F53\u305F\u308B\u3053\u3068\u304C\u591A\u304B\u3063\u305F\u306E\u3067\u524D\u56DE\u30CF\u30DE\u308A\u5F8C\u3092\u72D9\u3046\u306E\u306F\u5371\u967A\u3060\u3063\u305F\u304C\u3001\u3053\u306E\u6A5F\u7A2E\u306F600\u629C\u3051\u305F\u3089\u307B\u307C900\u307E\u3067\u884C\u304F\u306E\u3067\u5C65\u6B74\u6253\u3061\u304C\u6210\u529F\u3057\u3084\u3059\u3044\u3068\u3044\u3046\u7279\u5FB4\u6709\u308A\n\u524D\u56DE\u5B9FG600\u8D85\u3048\u3066\u3044\u308C\u3070\u6253\u3063\u3066\u826F\u3044\n\n\u2461\u30E6\u30CB\u30E1\u30E2\u3067\u30C6\u30FC\u30D6\u30EB\u78BA\u8A8D\u3067\u304D\u308B\u306E\u3067\u6253\u3064\u6642\u306B\u306F\u5165\u529B\u5FC5\u9808\n\n\u2462\u7A62\u308C\u8981\u7D20\uFF08\u30E9\u30A4\u30D6\u30DD\u30A4\u30F3\u30C8\uFF09\u3082\u72D9\u3044\u76EE\u306B\u306A\u308B\u53EF\u80FD\u6027\u6709\u308A\n\u203B\u30DE\u30AE\u30EC\u30B3\u3068\u540C\u3058\u3067\u30B9\u30EB\u30FC\u5929\u4E95\u306A\u308AAT\u9593\u306E\u7279\u5B9A\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u5927\u91CF\u7372\u5F97\u306E\u53EF\u80FD\u6027\u6709\u308B\u306E\u3067\u8ABF\u67FB",
        highlights: ["\u203B\u521D\u4EE3\u304B\u3089\u304F\u308A\u306F\u6DB2\u66761100\u306E\u624B\u524D\u306B1000\u3067\u5F53\u305F\u308B\u3053\u3068\u304C\u591A\u304B\u3063\u305F\u306E\u3067\u524D\u56DE\u30CF\u30DE\u308A\u5F8C\u3092\u72D9\u3046\u306E\u306F\u5371\u967A\u3060\u3063\u305F\u304C\u3001\u3053\u306E\u6A5F\u7A2E\u306F600\u629C\u3051\u305F\u3089\u307B\u307C900\u307E\u3067\u884C\u304F\u306E\u3067\u5C65\u6B74\u6253\u3061\u304C\u6210\u529F\u3057\u3084\u3059\u3044\u3068\u3044\u3046\u7279\u5FB4\u6709\u308A", "\u203B\u30DE\u30AE\u30EC\u30B3\u3068\u540C\u3058\u3067\u30B9\u30EB\u30FC\u5929\u4E95\u306A\u308AAT\u9593\u306E\u7279\u5B9A\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u5927\u91CF\u7372\u5F97\u306E\u53EF\u80FD\u6027\u6709\u308B\u306E\u3067\u8ABF\u67FB"],
        quote: "\u524D\u56DE\u5B9FG600\u8D85\u3048\u3068\u30E6\u30CB\u30E1\u30E2\u78BA\u8A8D\u3092\u8EF8\u306B\u898B\u308B"
      },
      {
        number: "04",
        title: "L\u90AA\u795E\u3061\u3083\u3093",
        body: "\u24605\u56DE\u5148\u307E\u3067\u306E\u30E2\u30FC\u30C9\u7BA1\u7406\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u793A\u5506\u30D5\u30A9\u30ED\u30FC\u3067\u304D\u308B\u53F0\u3092\u72D9\u3046\n\uFF08\u30DC\u30CA\u5F8CPUSH\u304C\u8A72\u5F53\u3057\u305D\u3046\u3060\u304C\u307E\u3060\u672A\u89E3\u6790\uFF09\n\n\u2461\u4E59\u59734\u3068\u540C\u3058\u3067\u3001\u30C7\u30FC\u30BF\u30AB\u30A6\u30F3\u30BF\u30FC\u306E\u30DC\u30FC\u30CA\u30B9\u304C\u901A\u5E38\u6642\u306A\u306E\u304BAT\u4E2D\u306A\u306E\u304B\u628A\u63E1\u3059\u308B\u306E\u304C\u96E3\u3057\u3044\u3002\u9AD8\u7CBE\u5EA6\u306A\u671F\u5F85\u5024\u306F\u51FA\u3066\u3053\u306A\u3044\u306E\u3067\u6253\u611F\u5927\u4E8B\n\n\u2462\u7A62\u308C\u793A\u5506\u3082\u3042\u308B\u306E\u3067\u898B\u843D\u3068\u3055\u306A\u3044\u3053\u3068",
        quote: "5\u56DE\u5148\u30E2\u30FC\u30C9\u793A\u5506\u3092\u8EF8\u306B\u898B\u308B"
      },
      {
        number: "05",
        title: "L\u3068\u3093\u30B9\u30AD",
        body: "\u2460\u4ECA\u306E\u3068\u3053\u308D\u307B\u307C\u30AB\u30D0\u30CD\u30EA\u3067\u3044\u3046\u3053\u3068\u7121\u3057",
        quote: "\u30AB\u30D0\u30CD\u30EA\u7CFB\u3068\u3057\u3066\u30B7\u30F3\u30D7\u30EB\u306B\u898B\u308B",
        link: "https://note.com/preview/n7625e2c4cded?prev_access_key=0de7db5283ee789195092d34ce85ec6d"
      },
      {
        number: "06",
        title: "L\u30EF\u30FC\u30EB\u30C9\u30C0\u30A4\u30B9\u30BF\u30FC",
        body: "\u2460\u5927\u90FD\u6A5F\u7A2E\u3067SAO\u3068\u540C\u3058\u304F\u30C7\u30FC\u30BF\u30AB\u30A6\u30F3\u30BF\u30FC\u304C\u8AAD\u307F\u306B\u304F\u3044\u306E\u3067\u3001\u6253\u611F\u306B\u983C\u308B\u5834\u9762\u304C\u591A\u305D\u3046\n\n\u2461\u307B\u307CToLOVE\u308B\u306B\u8FD1\u3044\u304C\u3001\u901A\u5E38\u6642\u306F\u30D9\u30EB\u3068\u30EA\u30D7\u30EC\u30A4\u3067\u3082\u30DD\u30A4\u30F3\u30C8\u52A0\u7B97\u304C\u3042\u308A\u3001\u8A085\u7A2E\u985E\u306E\u5185\u90E8\u30DD\u30A4\u30F3\u30C8\u304C\u8D70\u3063\u3066\u3044\u308B\u305F\u3081\u3001\u3084\u3081\u6642\u3092\u3057\u3063\u304B\u308A\u3059\u308C\u3070\u76F8\u5F53\u7518\u304F\u6253\u3066\u305D\u3046\n\n\u2462CZ\u306E\u30D5\u30A9\u30ED\u30FC\u8FBC\u307F\u3067\u30EA\u30BB\u306F\u6253\u3066\u308B\u53EF\u80FD\u6027\u3042\u308A\n\n\u2463\u30E1\u30CB\u30E5\u30FC\u304B\u3089\u6240\u6301\u30A2\u30A4\u30C6\u30E0\u3092\u898B\u3089\u308C\u308B\u306E\u3067\u78BA\u8A8D\u5FC5\u9808",
        quote: "\u5185\u90E8\u30DD\u30A4\u30F3\u30C8\u3068\u6240\u6301\u30A2\u30A4\u30C6\u30E0\u78BA\u8A8D\u3092\u8EF8\u306B\u898B\u308B"
      }
    ]
  },
  {
    id: "mind",
    title: "\u30DE\u30A4\u30F3\u30C9\u306B\u3064\u3044\u3066",
    subtitle: "\u30E9\u30A4\u30D0\u30EB\u3068\u72D9\u3044\u76EE\u3092\u305A\u3089\u3059\u8003\u3048\u65B9",
    icon: Brain,
    accent: "violet",
    items: [
      {
        number: "01",
        title: "\u4ECA\u306E\u30B9\u30DE\u30B9\u30ED\u3067\u52DD\u3061\u7D9A\u3051\u308B\u306E\u306F\u7C21\u5358\u306A\u3053\u3068\u3067\u306F\u306A\u3044\u3068\u7406\u89E3\u3059\u308B",
        body: "\u30B9\u30ED\u30C3\u30C8\u3067\u52DD\u3064\u306E\u306F\u7C21\u5358\u3060\u3068\u8A00\u308F\u308C\u304C\u3061\u3060\u304C\u3001\u4ECA\u306E\u30B9\u30DE\u30B9\u30ED\u3067\u52DD\u3061\u7D9A\u3051\u308B\u306E\u306F\u305D\u3093\u306A\u306B\u5358\u7D14\u3067\u306F\u306A\u3044\u3002\u305D\u3082\u305D\u3082\u72D9\u3044\u76EE\u3084\u524D\u63D0\u3092\u9593\u9055\u3048\u3066\u7406\u89E3\u3057\u3066\u3044\u308C\u3070\u3001\u8A66\u884C\u56DE\u6570\u3092\u5897\u3084\u3057\u3066\u3082\u7D50\u679C\u306F\u30BA\u30EC\u7D9A\u3051\u308B\u3002\u3055\u3089\u306B\u8352\u3044\u6A5F\u7A2E\u304C\u4E2D\u5FC3\u306A\u306E\u3067\u3001\u6B63\u3057\u3044\u5224\u65AD\u3092\u7D9A\u3051\u308B\u305F\u3081\u306B\u306F\u5341\u5206\u306A\u8CC7\u91D1\u3001\u8A66\u884C\u56DE\u6570\u3092\u7A3C\u3050\u884C\u52D5\u91CF\u3001\u4E0B\u632F\u308C\u3092\u53D7\u3051\u6B62\u3081\u308B\u30E1\u30F3\u30BF\u30EB\u304C\u5FC5\u8981\u306B\u306A\u308B\u3002",
        quote: "\u52DD\u3064\u524D\u63D0\u3092\u7518\u304F\u898B\u306A\u3044\u3053\u3068\u304C\u7D99\u7D9A\u306E\u571F\u53F0\u306B\u306A\u308B"
      },
      {
        number: "02",
        title: "\u660E\u78BA\u306A\u671F\u5F85\u5024\u304C\u5206\u304B\u3089\u306A\u3044\u72D9\u3044\u76EE\u3053\u305D\u30C1\u30E3\u30F3\u30B9\u3060\u3068\u601D\u3046\u3079\u304D",
        body: "\u660E\u78BA\u306A\u6570\u5024\u3067\u5F97\u3092\u3059\u308B\u3068\u3044\u3046\u3053\u3068\u304C\u5206\u304B\u3089\u306A\u3044\u9650\u308A\u7D76\u5BFE\u306B\u6253\u305F\u306A\u3044\u3068\u6C7A\u3081\u3066\u3044\u308B\u4EBA\u304C\u3068\u3066\u3082\u591A\u3044\u3002\u3057\u304B\u3057\u4ECA\u306E\u30B9\u30ED\u30C3\u30C8\u306B\u306F\u6B63\u78BA\u306A\u671F\u5F85\u5024\u306F\u51FA\u305B\u306A\u3044\u3051\u3069\u660E\u3089\u304B\u306B\u7518\u3044\u72B6\u6CC1\u3068\u3044\u3046\u306E\u304C\u3044\u304F\u3064\u3082\u3042\u308B\u3002\u3053\u3046\u3044\u3046\u72D9\u3044\u76EE\u306F\u60C5\u5831\u304C\u5E83\u304C\u308B\u524D\u307B\u3069\u30E9\u30A4\u30D0\u30EB\u304C\u5C11\u306A\u3044\u306E\u3067\u3001\u30E9\u30A4\u30D0\u30EB\u304C\u5897\u3048\u308B\u524D\u306B\u8A66\u884C\u56DE\u6570\u3092\u7A4D\u3093\u3067\u3057\u307E\u3044\u305F\u3044\u3002\u81EA\u5206\u3067\u5148\u306B\u89E6\u3063\u3066\u6839\u62E0\u3092\u56FA\u3081\u3089\u308C\u308C\u3070\u3001\u305D\u306E\u5F8C\u306E\u7ACB\u3061\u56DE\u308A\u306E\u6B66\u5668\u306B\u306A\u308B\u3002",
        highlights: ["\u30E9\u30A4\u30D0\u30EB\u304C\u5897\u3048\u308B\u524D\u306B\u8A66\u884C\u56DE\u6570\u3092\u7A4D\u3093\u3067\u3057\u307E\u3044\u305F\u3044\u3002"],
        quote: "\u5927\u8846\u3068\u9055\u3046\u7D50\u679C\u3092\u6B8B\u3059\u306B\u306F\u5927\u8846\u3068\u9055\u3046\u884C\u52D5\u3092\u3057\u306A\u304F\u3066\u306F\u3044\u3051\u306A\u3044"
      },
      {
        number: "03",
        title: "\u81EA\u5206\u306E\u6253\u611F\u3092\u7121\u8996\u3057\u306A\u3044",
        body: "\u300C\u671F\u5F85\u5024\u8868\u7684\u306B\u306F\u6253\u3066\u308B\u3068\u306A\u3063\u3066\u3044\u308B\u3051\u3069\u8F9B\u304F\u611F\u3058\u308B\u300D\u300C\u3053\u3053\u3092\u72D9\u3063\u3066\u308B\u4EBA\u306F\u5C11\u306A\u3044\u3051\u3069\u7518\u304F\u611F\u3058\u308B\u300D\u3053\u3046\u3044\u3046\u6253\u3061\u65B9\u306F\u5927\u91CF\u30C7\u30FC\u30BF\u306E\u524D\u3067\u306F\u30AA\u30AB\u30EB\u30C8\u3060\u3068\u8EFD\u8996\u3055\u308C\u304C\u3061\u3060\u304C\u3001\u305D\u3093\u306A\u3053\u3068\u306F\u306A\u3044\u3002\u4F55\u5343\u4E07G\u3068\u6253\u305F\u306A\u304F\u305F\u3063\u3066\u5206\u304B\u308B\u7279\u6B8A\u306A\u6319\u52D5\u306F\u3044\u304F\u3089\u3060\u3063\u3066\u5B58\u5728\u3059\u308B\u3002\u4ECA\u307E\u3067\u306E\u540C\u30E1\u30FC\u30AB\u30FC\u306E\u89E3\u6790\u60C5\u5831\u7B49\u3092\u3082\u3068\u306B\u81EA\u5206\u306E\u8003\u3048\u3092\u4FE1\u3058\u308B\u306E\u306F\u4F55\u306E\u554F\u984C\u3082\u306A\u3044\u3002",
        highlights: ["\u4F55\u5343\u4E07G\u3068\u6253\u305F\u306A\u304F\u305F\u3063\u3066\u5206\u304B\u308B\u7279\u6B8A\u306A\u6319\u52D5\u306F\u3044\u304F\u3089\u3060\u3063\u3066\u5B58\u5728\u3059\u308B\u3002"],
        quote: "\u6253\u611F\u3067\u5371\u306A\u3044\u3068\u601D\u3046\u53F0\u306F\u7121\u7406\u306B\u6253\u305F\u306A\u304F\u3066\u3082\u3044\u3044"
      },
      {
        number: "04",
        title: "\u4E0B\u632F\u308C\u306E\u5272\u308A\u5207\u308A\u65B9",
        body: "\u30B9\u30DE\u30B9\u30ED\u306F\u8352\u3044\u306E\u3067\u3001\u6B63\u3057\u3044\u53F0\u3092\u6253\u3063\u3066\u3044\u3066\u3082\u77ED\u671F\u3067\u306F\u7C21\u5358\u306B\u8CA0\u3051\u308B\u3002\u4E0B\u632F\u308C\u3092\u7D50\u679C\u8AD6\u3067\u5426\u5B9A\u3057\u3059\u304E\u308B\u3068\u3001\u672C\u5F53\u306B\u7518\u3044\u72D9\u3044\u76EE\u307E\u3067\u6253\u3066\u306A\u304F\u306A\u308B\u3002\u6253\u3064\u524D\u306E\u6839\u62E0\u3001\u53F0\u6570\u3001\u6295\u8CC7\u7BA1\u7406\u3092\u6B8B\u3057\u3066\u3001\u7D50\u679C\u3067\u306F\u306A\u304F\u5224\u65AD\u306E\u8CEA\u3067\u632F\u308A\u8FD4\u308B\u3088\u3046\u306B\u3057\u305F\u3044\u3002",
        highlights: ["\u7D50\u679C\u3067\u306F\u306A\u304F\u5224\u65AD\u306E\u8CEA\u3067\u632F\u308A\u8FD4\u308B\u3088\u3046\u306B\u3057\u305F\u3044\u3002"],
        quote: "\u8CA0\u3051\u305F\u7406\u7531\u3092\u7D50\u679C\u3067\u306F\u306A\u304F\u6839\u62E0\u3067\u78BA\u8A8D\u3059\u308B"
      }
    ]
  },
  {
    id: "travel",
    title: "\u65C5\u6253\u3061\u306E\u304A\u4F9B",
    subtitle: "\u9060\u5F81\u5148\u306E\u5E97\u30FB\u98EF\u30FB\u5BBF\u3092\u307E\u3068\u3081\u308B",
    icon: MapPin,
    accent: "gray",
    isDraft: true,
    items: []
  },
  {
    id: "environmentArchive",
    title: "\u300C\u73FE\u74B0\u5883\u306B\u3064\u3044\u3066\u300D\u306E\u30A2\u30FC\u30AB\u30A4\u30D6",
    subtitle: "\u904E\u53BB\u306E\u74B0\u5883\u30E1\u30E2\u3092\u6B8B\u3059",
    icon: History,
    accent: "blue",
    items: ENVIRONMENT_ARCHIVE_ENTRIES
  },
  {
    id: "links",
    title: "\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30EA\u30F3\u30AF",
    subtitle: "\u653B\u7565\u30B5\u30A4\u30C8\u306E\u30EA\u30F3\u30AF\u3092\u307E\u3068\u3081\u3066\u304A\u304F",
    icon: LinkIcon,
    accent: "amber",
    items: []
  }
];
const STRATEGY_ACCENT_STYLES = {
  blue: {
    activeButton: "border-blue-500 bg-blue-50 text-blue-700 shadow-sm",
    inactiveButton: "border-gray-200 bg-white text-gray-700 active:bg-gray-50",
    icon: "bg-blue-600 text-white",
    badge: "bg-blue-100 text-blue-700",
    quote: "border-blue-200 bg-blue-50 text-blue-800"
  },
  red: {
    activeButton: "border-red-500 bg-red-50 text-red-700 shadow-sm",
    inactiveButton: "border-gray-200 bg-white text-gray-700 active:bg-gray-50",
    icon: "bg-red-600 text-white",
    badge: "bg-red-100 text-red-700",
    quote: "border-red-200 bg-red-50 text-red-800"
  },
  violet: {
    activeButton: "border-violet-500 bg-violet-50 text-violet-700 shadow-sm",
    inactiveButton: "border-gray-200 bg-white text-gray-700 active:bg-gray-50",
    icon: "bg-violet-600 text-white",
    badge: "bg-violet-100 text-violet-700",
    quote: "border-violet-200 bg-violet-50 text-violet-800"
  },
  green: {
    activeButton: "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm",
    inactiveButton: "border-gray-200 bg-white text-gray-700 active:bg-gray-50",
    icon: "bg-emerald-600 text-white",
    badge: "bg-emerald-100 text-emerald-700",
    quote: "border-emerald-200 bg-emerald-50 text-emerald-800"
  },
  amber: {
    activeButton: "border-amber-500 bg-amber-50 text-amber-700 shadow-sm",
    inactiveButton: "border-gray-200 bg-white text-gray-700 active:bg-gray-50",
    icon: "bg-amber-500 text-white",
    badge: "bg-amber-100 text-amber-700",
    quote: "border-amber-200 bg-amber-50 text-amber-800"
  },
  gray: {
    activeButton: "border-gray-400 bg-gray-100 text-gray-700 shadow-sm",
    inactiveButton: "border-gray-200 bg-gray-100 text-gray-500 active:bg-gray-100",
    icon: "bg-gray-500 text-white",
    badge: "bg-gray-100 text-gray-600",
    quote: "border-gray-200 bg-gray-50 text-gray-700"
  }
};
const normalizeShortcutUrl = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
};
const mergeDefaultShortcutLinks = (links) => {
  const existingUrls = new Set(links.map((link) => normalizeShortcutUrl(link.url).toLowerCase()));
  const missingDefaults = DEFAULT_STRATEGY_SHORTCUT_LINKS.filter((link) => !existingUrls.has(normalizeShortcutUrl(link.url).toLowerCase()));
  return [...missingDefaults, ...links];
};
const renderHighlightedText = (text, highlights = []) => {
  const targets = highlights.filter(Boolean);
  if (!targets.length) return text;
  const parts = [];
  let cursor = 0;
  targets.forEach((target, index) => {
    const foundAt = text.indexOf(target, cursor);
    if (foundAt === -1) return;
    if (foundAt > cursor) parts.push(text.slice(cursor, foundAt));
    parts.push(
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "text-red-500 bg-red-100/80 px-0.5 rounded-sm box-decoration-clone",
          children: target
        },
        `${target}-${index}`
      )
    );
    cursor = foundAt + target.length;
  });
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
};
const CardImage = ({ url, name, tag, tagColor, hasLink, compact = false }) => {
  const [error, setError] = useState(false);
  const [retryIndex, setRetryIndex] = useState(0);
  const variants = useMemo(() => {
    if (!url) return [];
    if (url.startsWith("http") || url.startsWith("data:")) return [url];
    const cleanName = url.replace(/^\.\//, "").replace(/^\//, "");
    return [cleanName, `./${cleanName}`, `/${cleanName}`];
  }, [url]);
  const currentUrl = variants[retryIndex];
  const handleError = () => {
    if (retryIndex < variants.length - 1) setRetryIndex((prev) => prev + 1);
    else setError(true);
  };
  const safeTag = tag || "";
  const tagsArray = Array.isArray(safeTag) ? safeTag : safeTag.toString().split(",");
  const tagColorsArray = tagColor ? tagColor.split(",") : [];
  const displayTagPairs = tagsArray.map((t, idx) => ({
    label: t.trim(),
    color: tagColorsArray[idx] ? tagColorsArray[idx].trim() : tagColorsArray[0] || "bg-white"
  })).filter(({ label }) => label.length > 0).filter(({ label }) => !(name === "\u5317\u6597\u8EE2\u751F\uFF12" && label === "\u30EA\u30BB"));
  return /* @__PURE__ */ jsxs("div", { className: `${compact ? "h-24" : "h-28"} relative overflow-hidden bg-neutral-900 flex flex-col justify-end`, children: [
    currentUrl && !error ? /* @__PURE__ */ jsx(
      "img",
      {
        src: currentUrl,
        alt: name || "image",
        className: "absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-300",
        onError: handleError
      },
      currentUrl
    ) : /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-20", children: /* @__PURE__ */ jsx(ImageIcon, { size: 32, className: "text-gray-400" }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" }),
    hasLink && /* @__PURE__ */ jsx("div", { className: "absolute top-1 left-1 bg-black/60 p-1 rounded-md z-20", children: /* @__PURE__ */ jsx(ExternalLink, { size: 12, className: "text-white" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 px-2 pb-1", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] text-white font-black leading-tight drop-shadow-md truncate", children: name }),
      displayTagPairs.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: displayTagPairs.map(({ label, color }, idx) => {
        return /* @__PURE__ */ jsx("div", { className: `inline-block px-2 py-0.5 rounded text-[9px] font-bold text-black shadow-sm ${color}`, children: label }, idx);
      }) })
    ] })
  ] });
};
const App = () => {
  const [activeTab, setActiveTab] = useState("ruko");
  useEffect(() => {
    markAppBooted();
  }, []);
  const [rukoItems, setRukoItems] = useState(() => {
    let items = RUKO_OFFICIAL_DATA;
    try {
      const saved = localStorage.getItem("slot_app_rukoItems_v58");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) items = parsed;
      }
    } catch (e) {
      console.error("\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u30A8\u30E9\u30FC:", e);
    }
    return refreshOfficialTargetItems(items).filter((item) => item && !HIDDEN_TARGET_ITEM_IDS.has(item.id)).map((item) => ({
      ...item,
      memo: item.memo || DEFAULT_MEMO_TEMPLATE,
      timeSlots: getTargetTimeSlots(item)
    }));
  });
  useEffect(() => {
    try {
      localStorage.setItem("slot_app_rukoItems_v58", JSON.stringify(rukoItems));
    } catch (e) {
      console.warn("\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F", e);
    }
  }, [rukoItems]);
  const [isEditing, setIsEditing] = useState(false);
  const [draggedItemId, setDraggedItemId] = useState(null);
  const [dragOverTier, setDragOverTier] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [targetTimeSort, setTargetTimeSort] = useState("all");
  const [targetTagFilter, setTargetTagFilter] = useState("all");
  const [activeStrategySectionId, setActiveStrategySectionId] = useState(null);
  const [shortcutLinks, setShortcutLinks] = useState(() => {
    try {
      const saved = localStorage.getItem(STRATEGY_SHORTCUT_LINK_STORAGE_KEY);
      const defaultLinksSeeded = localStorage.getItem(STRATEGY_SHORTCUT_LINK_DEFAULTS_KEY) === "1";
      const parsed = saved ? JSON.parse(saved) : [];
      const links = Array.isArray(parsed) ? parsed.filter((link) => link && link.title && link.url).map((link) => ({
        id: link.id || `link-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: String(link.title),
        url: String(link.url),
        memo: String(link.memo || "")
      })) : [];
      if (defaultLinksSeeded) return links;
      localStorage.setItem(STRATEGY_SHORTCUT_LINK_DEFAULTS_KEY, "1");
      return mergeDefaultShortcutLinks(links);
    } catch (e) {
      console.warn("\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30EA\u30F3\u30AF\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F", e);
      return DEFAULT_STRATEGY_SHORTCUT_LINKS;
    }
  });
  const [shortcutLinkForm, setShortcutLinkForm] = useState({ title: "", url: "", memo: "" });
  const [showToast, setShowToast] = useState(null);
  useEffect(() => {
    try {
      localStorage.setItem(STRATEGY_SHORTCUT_LINK_STORAGE_KEY, JSON.stringify(shortcutLinks));
    } catch (e) {
      console.warn("\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30EA\u30F3\u30AF\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F", e);
    }
  }, [shortcutLinks]);
  const [detailModalConfig, setDetailModalConfig] = useState({ isOpen: false, item: null });
  const [isMemoEditing, setIsMemoEditing] = useState(false);
  const [editingMemoText, setEditingMemoText] = useState("");
  const [modalConfig, setModalConfig] = useState({ isOpen: false, mode: "add", itemId: null });
  const [formData, setFormData] = useState({ name: "", detail: "", tag: "", imageUrl: "", link: "", memo: "" });
  const [currentDate, setCurrentDate] = useState(/* @__PURE__ */ new Date());
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(!!supabase);
  const [authSubmitting, setAuthSubmitting] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [authForm, setAuthForm] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [workloadLoading, setWorkloadLoading] = useState(false);
  const [workloadError, setWorkloadError] = useState("");
  const [monthWorkloads, setMonthWorkloads] = useState([]);
  const [workloadSaving, setWorkloadSaving] = useState(false);
  const [deletingWorkloadId, setDeletingWorkloadId] = useState(null);
  const [isMigratingWorkloads, setIsMigratingWorkloads] = useState(false);
  const [hasLocalBackup, setHasLocalBackup] = useState(() => hasLocalWorkloadBackup());
  const [isWorkloadModalOpen, setIsWorkloadModalOpen] = useState(false);
  const [workloadForm, setWorkloadForm] = useState(EMPTY_WORKLOAD_FORM);
  const [isMachineDropdownOpen, setIsMachineDropdownOpen] = useState(false);
  const [activeMachineOptionIndex, setActiveMachineOptionIndex] = useState(0);
  const [selectedTargetLabel, setSelectedTargetLabel] = useState("");
  const machineOptions = useMemo(() => buildMachineOptions(rukoItems), [rukoItems]);
  const activeStrategySection = STRATEGY_SECTION_DATA.find((section) => section.id === activeStrategySectionId) || null;
  const activeStrategyStyles = activeStrategySection ? STRATEGY_ACCENT_STYLES[activeStrategySection.accent] || STRATEGY_ACCENT_STYLES.blue : STRATEGY_ACCENT_STYLES.blue;
  const ActiveStrategyIcon = activeStrategySection?.icon || BookOpen;
  const targetPreset = useMemo(() => findTargetPreset(workloadForm.machineName), [workloadForm.machineName]);
  const workloadPreviewValue = useMemo(
    () => calculateWorkValue(workloadForm.payoutRate, workloadForm.playTime),
    [workloadForm.payoutRate, workloadForm.playTime]
  );
  const workloadTimeRangeMinutes = useMemo(
    () => calculateTimeRangeMinutes(workloadForm.startTime, workloadForm.endTime),
    [workloadForm.startTime, workloadForm.endTime]
  );
  const filteredMachineOptions = useMemo(() => {
    const query = normalizeMachineText(workloadForm.machineName);
    const matchedOptions = query ? machineOptions.filter((option) => normalizeMachineText([
      option.name,
      option.maker,
      option.introducedAt,
      ...option.aliases || []
    ].join(" ")).includes(query)) : machineOptions;
    return matchedOptions.slice(0, 8);
  }, [machineOptions, workloadForm.machineName]);
  useEffect(() => {
    setActiveMachineOptionIndex(0);
    setSelectedTargetLabel("");
  }, [workloadForm.machineName]);
  useEffect(() => {
    if (!isWorkloadModalOpen) setIsMachineDropdownOpen(false);
  }, [isWorkloadModalOpen]);
  const selectMachineOption = (option) => {
    setWorkloadForm((prev) => ({ ...prev, machineName: option.name }));
    setIsMachineDropdownOpen(false);
    setActiveMachineOptionIndex(0);
  };
  const applyTargetPreset = (target) => {
    setWorkloadForm((prev) => ({ ...prev, payoutRate: target.payoutRate }));
    setSelectedTargetLabel(target.label);
  };
  const adjustPayoutRate = (delta) => {
    setSelectedTargetLabel("");
    setWorkloadForm((prev) => {
      const currentRate = parseFloat(prev.payoutRate);
      const baseRate = Number.isFinite(currentRate) ? currentRate : 100;
      const nextRate = Math.round((baseRate + delta) * 10) / 10;
      return { ...prev, payoutRate: nextRate.toString() };
    });
  };
  const handlePayoutRateKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      adjustPayoutRate(0.5);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      adjustPayoutRate(-0.5);
    }
  };
  const adjustWorkloadTime = (delta) => {
    setWorkloadForm((prev) => {
      const currentTime = parseFloat(prev.playTime);
      const baseTime = Number.isFinite(currentTime) ? currentTime : 0;
      const nextTime = Math.max(0, Math.round((baseTime + delta) / 10) * 10);
      return {
        ...prev,
        startTime: "",
        endTime: "",
        playTime: nextTime.toString(),
        playCount: estimatePlayCountFromTime(nextTime)
      };
    });
  };
  const handleWorkloadTimeKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      adjustWorkloadTime(10);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      adjustWorkloadTime(-10);
    }
  };
  const handleMachineInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsMachineDropdownOpen(true);
      setActiveMachineOptionIndex((prev) => Math.min(prev + 1, Math.max(filteredMachineOptions.length - 1, 0)));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveMachineOptionIndex((prev) => Math.max(prev - 1, 0));
      return;
    }
    if (e.key === "Enter" && isMachineDropdownOpen && filteredMachineOptions[activeMachineOptionIndex]) {
      e.preventDefault();
      selectMachineOption(filteredMachineOptions[activeMachineOptionIndex]);
      return;
    }
    if (e.key === "Escape") {
      setIsMachineDropdownOpen(false);
    }
  };
  const handleWorkloadTimeChange = (e) => {
    const time = e.target.value;
    setWorkloadForm((prev) => ({
      ...prev,
      startTime: "",
      endTime: "",
      playTime: time,
      playCount: estimatePlayCountFromTime(time)
    }));
  };
  const handleWorkloadCountChange = (e) => {
    const count = e.target.value;
    setWorkloadForm((prev) => ({
      ...prev,
      startTime: "",
      endTime: "",
      playCount: count,
      playTime: estimatePlayTimeFromCount(count)
    }));
  };
  const updateWorkloadTimeRange = (updates) => {
    setWorkloadForm((prev) => {
      const next = { ...prev, ...updates };
      const duration = calculateTimeRangeMinutes(next.startTime, next.endTime);
      if (duration !== "") {
        next.playTime = duration.toString();
        next.playCount = estimatePlayCountFromTime(duration);
      }
      return next;
    });
  };
  const handleWorkloadStartTimeChange = (e) => {
    updateWorkloadTimeRange({ startTime: e.target.value });
  };
  const handleWorkloadEndTimeChange = (e) => {
    updateWorkloadTimeRange({ endTime: e.target.value });
  };
  const setWorkloadClockNow = (field) => {
    updateWorkloadTimeRange({ [field]: formatClockTime() });
  };
  const formatDateStr = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };
  const displayDateStr = (date) => {
    const days = ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"];
    return `${date.getMonth() + 1}/${date.getDate()} (${days[date.getDay()]})`;
  };
  const displayMonthStr = (date) => `${date.getFullYear()}\u5E74 ${date.getMonth() + 1}\u6708`;
  const formatSignedAmount = (value, withYen = false) => {
    const safeValue = Number(value) || 0;
    const prefix = safeValue > 0 ? "+" : safeValue < 0 ? "" : "\xB1";
    return `${prefix}${safeValue.toLocaleString()}${withYen ? "\u5186" : ""}`;
  };
  const getCalendarWorkValueTextClass = (value) => {
    const textLength = formatSignedAmount(value).length;
    if (textLength >= 8) return "text-[7.5px]";
    if (textLength >= 7) return "text-[8px]";
    if (textLength >= 6) return "text-[9px]";
    return "text-[10px]";
  };
  const changeDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };
  const changeMonth = (months) => {
    setCurrentDate((prev) => {
      const year = prev.getFullYear();
      const targetMonth = prev.getMonth() + months;
      const lastDay = new Date(year, targetMonth + 1, 0).getDate();
      return new Date(year, targetMonth, Math.min(prev.getDate(), lastDay));
    });
  };
  const selectCalendarDate = (date) => {
    setCurrentDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
  };
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const fetchMonthWorkloads = async (baseDate = currentDate) => {
    if (!supabase || !session) return;
    setWorkloadLoading(true);
    setWorkloadError("");
    try {
      const year = baseDate.getFullYear();
      const month = baseDate.getMonth();
      const monthStart = formatDateStr(new Date(year, month, 1));
      const nextMonthStart = formatDateStr(new Date(year, month + 1, 1));
      const { data, error } = await supabase.from("workload_entries").select("id,date,machine_name,payout_rate,play_time,play_count,memo,work_value,created_at").gte("date", monthStart).lt("date", nextMonthStart).order("date", { ascending: true }).order("created_at", { ascending: true });
      if (error) throw error;
      setMonthWorkloads((data || []).map(normalizeWorkloadRow));
    } catch (error) {
      setWorkloadError(error.message || "\u4ED5\u4E8B\u91CF\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F");
    } finally {
      setWorkloadLoading(false);
    }
  };
  useEffect(() => {
    if (!supabase) {
      setAuthLoading(false);
      return;
    }
    let mounted = true;
    supabase.auth.getSession().then(({ data: data2, error }) => {
      if (!mounted) return;
      if (error) setAuthError(error.message);
      setSession(data2?.session || null);
    }).catch((error) => {
      if (mounted) setAuthError(error.message || "\u30ED\u30B0\u30A4\u30F3\u72B6\u614B\u3092\u78BA\u8A8D\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
    }).finally(() => {
      if (mounted) setAuthLoading(false);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setAuthError("");
      setAuthMessage("");
      if (!nextSession) {
        setMonthWorkloads([]);
        setWorkloadError("");
        setIsWorkloadModalOpen(false);
      }
    });
    return () => {
      mounted = false;
      data?.subscription?.unsubscribe();
    };
  }, []);
  useEffect(() => {
    if (!session || !supabase) return;
    fetchMonthWorkloads(currentDate);
  }, [session, currentYear, currentMonth]);
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    if (!supabase) return;
    const email = authForm.email.trim();
    const password = authForm.password;
    if (!email || !password) {
      setAuthError("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    setAuthSubmitting(true);
    setAuthError("");
    setAuthMessage("");
    try {
      const { error } = authMode === "login" ? await supabase.auth.signInWithPassword({ email, password }) : await supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.href } });
      if (error) throw error;
      setAuthMessage(authMode === "login" ? "\u30ED\u30B0\u30A4\u30F3\u3057\u307E\u3057\u305F" : "\u767B\u9332\u3092\u53D7\u3051\u4ED8\u3051\u307E\u3057\u305F\u3002\u78BA\u8A8D\u30E1\u30FC\u30EB\u304C\u5C4A\u3044\u305F\u5834\u5408\u306F\u8A8D\u8A3C\u5F8C\u306B\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
    } catch (error) {
      setAuthError(error.message || "\u8A8D\u8A3C\u306B\u5931\u6557\u3057\u307E\u3057\u305F");
    } finally {
      setAuthSubmitting(false);
    }
  };
  const handleLogout = async () => {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) setAuthError(error.message);
  };
  const saveShortcutLink = () => {
    const title = shortcutLinkForm.title.trim();
    const url = normalizeShortcutUrl(shortcutLinkForm.url);
    const memo = shortcutLinkForm.memo.trim();
    if (!title) return triggerToast("\u30EA\u30F3\u30AF\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    if (!url) return triggerToast("URL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    try {
      new URL(url);
    } catch (error) {
      return triggerToast("URL\u306E\u5F62\u5F0F\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044");
    }
    setShortcutLinks((prev) => [
      {
        id: `link-${Date.now()}`,
        title,
        url,
        memo
      },
      ...prev
    ]);
    setShortcutLinkForm({ title: "", url: "", memo: "" });
    triggerToast("\u30EA\u30F3\u30AF\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F");
  };
  const deleteShortcutLink = (id) => {
    setShortcutLinks((prev) => prev.filter((link) => link.id !== id));
    triggerToast("\u30EA\u30F3\u30AF\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
  };
  const openShortcutLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const goToShortcutLinks = () => {
    setActiveTab("column");
    setActiveStrategySectionId("links");
  };
  const goToAugustNewMachineNotes = () => {
    setActiveTab("column");
    setActiveStrategySectionId("augustNewMachines");
  };
  const migrateLocalWorkloads = async () => {
    if (!supabase || !session) return;
    const localData = readLocalWorkloadBackup();
    const rows = Object.entries(localData).flatMap(([dateKey, items]) => Array.isArray(items) ? items.filter((item) => item && item.machineName).map((item) => {
      const payoutRate = parseFloat(item.payoutRate) || 100;
      const playTime = parseInt(item.playTime, 10) || 0;
      const playCount = parseInt(item.playCount, 10) || 0;
      const savedWorkValue = Number(item.workValue);
      return {
        user_id: session.user.id,
        date: dateKey,
        machine_name: item.machineName,
        payout_rate: payoutRate,
        play_time: playTime,
        play_count: playCount,
        memo: item.memo || "",
        work_value: Number.isFinite(savedWorkValue) ? Math.round(savedWorkValue) : calculateWorkValue(payoutRate, playTime)
      };
    }) : []);
    if (rows.length === 0) {
      setHasLocalBackup(false);
      setAuthMessage("\u79FB\u884C\u3067\u304D\u308B\u7AEF\u672B\u5185\u8A18\u9332\u306F\u3042\u308A\u307E\u305B\u3093");
      return;
    }
    setIsMigratingWorkloads(true);
    setWorkloadError("");
    setAuthMessage("");
    try {
      const { error } = await supabase.from("workload_entries").insert(rows);
      if (error) throw error;
      localStorage.removeItem(WORKLOAD_STORAGE_KEY);
      setHasLocalBackup(false);
      setAuthMessage(`${rows.length}\u4EF6\u306E\u7AEF\u672B\u5185\u8A18\u9332\u3092\u79FB\u884C\u3057\u307E\u3057\u305F`);
      await fetchMonthWorkloads(currentDate);
    } catch (error) {
      setWorkloadError(error.message || "\u7AEF\u672B\u5185\u8A18\u9332\u3092\u79FB\u884C\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
    } finally {
      setIsMigratingWorkloads(false);
    }
  };
  const saveWorkload = async () => {
    if (!workloadForm.machineName.trim()) return triggerToast("\u6A5F\u7A2E\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    if (!supabase || !session) {
      setWorkloadError("\u4ED5\u4E8B\u91CF\u3092\u4FDD\u5B58\u3059\u308B\u306B\u306F\u30ED\u30B0\u30A4\u30F3\u304C\u5FC5\u8981\u3067\u3059");
      return;
    }
    const dateKey = formatDateStr(currentDate);
    const workValue = calculateWorkValue(workloadForm.payoutRate, workloadForm.playTime);
    const payoutRate = parseFloat(workloadForm.payoutRate) || 100;
    const playTime = parseInt(workloadForm.playTime, 10) || 0;
    const playCount = parseInt(workloadForm.playCount, 10) || 0;
    setWorkloadSaving(true);
    setWorkloadError("");
    try {
      const { error } = await supabase.from("workload_entries").insert({
        user_id: session.user.id,
        date: dateKey,
        machine_name: workloadForm.machineName.trim(),
        payout_rate: payoutRate,
        play_time: playTime,
        play_count: playCount,
        memo: workloadForm.memo || "",
        work_value: workValue
      });
      if (error) throw error;
      setIsWorkloadModalOpen(false);
      setWorkloadForm({ ...EMPTY_WORKLOAD_FORM });
      setSelectedTargetLabel("");
      await fetchMonthWorkloads(currentDate);
    } catch (error) {
      setWorkloadError(error.message || "\u4ED5\u4E8B\u91CF\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
    } finally {
      setWorkloadSaving(false);
    }
  };
  const deleteWorkload = async (dateKey, id) => {
    if (!supabase || !session) return;
    setDeletingWorkloadId(id);
    setWorkloadError("");
    try {
      const { error } = await supabase.from("workload_entries").delete().eq("id", id);
      if (error) throw error;
      await fetchMonthWorkloads(currentDate);
    } catch (error) {
      setWorkloadError(error.message || "\u4ED5\u4E8B\u91CF\u3092\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
    } finally {
      setDeletingWorkloadId(null);
    }
  };
  const getDateTotalWorkValue = (date) => {
    const dateKey = formatDateStr(date);
    const items = monthWorkloads.filter((item) => item.date === dateKey);
    return items.reduce((sum, item) => sum + (Number(item.workValue) || 0), 0);
  };
  const selectedDateKey = formatDateStr(currentDate);
  const todayKey = formatDateStr(/* @__PURE__ */ new Date());
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) cells.push(null);
    for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [currentDate]);
  const monthTotalWorkValue = useMemo(() => {
    return monthWorkloads.reduce((sum, item) => sum + (Number(item.workValue) || 0), 0);
  }, [monthWorkloads]);
  const currentWorkloads = monthWorkloads.filter((item) => item.date === selectedDateKey);
  const exportData = () => {
    const dataStr = JSON.stringify(rukoItems, null, 2);
    navigator.clipboard.writeText(dataStr).then(() => {
      triggerToast("JSON\u30C7\u30FC\u30BF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\uFF01");
    }).catch((err) => {
      triggerToast("\u30B3\u30D4\u30FC\u5931\u6557\u3002");
    });
  };
  const moveItem = (itemId, targetTier) => {
    if (!IS_ADMIN_MODE) return;
    setRukoItems((prev) => prev.map((item) => item.id === itemId ? { ...item, tier: targetTier } : item));
    setDraggedItemId(null);
    setDragOverTier(null);
  };
  const triggerToast = (msg) => {
    setShowToast(msg);
    setTimeout(() => setShowToast(null), 3e3);
  };
  const handleModalSave = () => {
    if (!formData.name) return triggerToast("\u6A5F\u7A2E\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    if (modalConfig.mode === "add") {
      setRukoItems([...rukoItems, { id: `r-${Date.now()}`, ...formData, tier: "C" }]);
      triggerToast(`${formData.name} \u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F`);
    } else if (modalConfig.mode === "edit") {
      setRukoItems(rukoItems.map((i) => i.id === modalConfig.itemId ? { ...i, ...formData } : i));
      triggerToast(`\u66F4\u65B0\u3057\u307E\u3057\u305F`);
    }
    setModalConfig({ isOpen: false, mode: "add", itemId: null });
  };
  const deleteItem = (id) => {
    if (IS_ADMIN_MODE) setRukoItems(rukoItems.filter((item) => item.id !== id));
  };
  const filteredItems = rukoItems.filter(
    (item) => !HIDDEN_TARGET_ITEM_IDS.has(item.id) && ((item.name || "").toLowerCase().includes(searchQuery.toLowerCase()) || item.detail && item.detail.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const listItems = useMemo(() => filteredItems.map((item, index) => {
    const timeSlots = getTargetTimeSlots(item);
    return {
      ...item,
      timeSlots,
      matchesSelectedTime: targetTimeSort === "all" || timeSlots.includes(targetTimeSort),
      matchesSelectedTag: matchesTargetTagFilter(item, targetTagFilter),
      originalIndex: index
    };
  }).filter((item) => item.matchesSelectedTime && item.matchesSelectedTag).sort((a, b) => {
    const tierDiff = getTargetTierRank(a.tier) - getTargetTierRank(b.tier);
    if (tierDiff !== 0) return tierDiff;
    return a.originalIndex - b.originalIndex;
  }), [filteredItems, targetTimeSort, targetTagFilter]);
  const canDrag = IS_ADMIN_MODE && isEditing;
  const renderMemberGate = (title, description) => /* @__PURE__ */ jsx("div", { className: "p-4 space-y-4 bg-gray-50 min-h-full", children: !supabase ? /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Database, { size: 20 }) }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-black text-gray-900", children: "Supabase\u8A2D\u5B9A\u304C\u5FC5\u8981\u3067\u3059" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-gray-600 font-medium", children: "\u4F1A\u54E1\u9650\u5B9A\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u4F7F\u3046\u306B\u306F\u3001Supabase\u306E\u63A5\u7D9A\u8A2D\u5B9A\u304C\u5FC5\u8981\u3067\u3059\u3002" })
    ] })
  ] }) }) : authLoading ? /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center", children: [
    /* @__PURE__ */ jsx(RefreshCw, { size: 22, className: "mx-auto mb-3 text-blue-500 animate-spin" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-gray-700", children: "\u30ED\u30B0\u30A4\u30F3\u72B6\u614B\u3092\u78BA\u8A8D\u4E2D..." })
  ] }) : /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(User, { size: 20 }) }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-base font-black text-gray-900", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs leading-relaxed text-gray-600 font-medium", children: description })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4 bg-gray-100 p-1 rounded-xl", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setAuthMode("login");
            setAuthError("");
            setAuthMessage("");
          },
          className: `py-2 rounded-lg text-xs font-black transition-colors ${authMode === "login" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`,
          children: "\u30ED\u30B0\u30A4\u30F3"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setAuthMode("signup");
            setAuthError("");
            setAuthMessage("");
          },
          className: `py-2 rounded-lg text-xs font-black transition-colors ${authMode === "signup" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`,
          children: "\u65B0\u898F\u767B\u9332"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleAuthSubmit, className: "space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-gray-600 mb-1", children: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            value: authForm.email,
            onChange: (e) => setAuthForm((prev) => ({ ...prev, email: e.target.value })),
            className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
            placeholder: "email@example.com"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-gray-600 mb-1", children: "\u30D1\u30B9\u30EF\u30FC\u30C9" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            value: authForm.password,
            onChange: (e) => setAuthForm((prev) => ({ ...prev, password: e.target.value })),
            className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
            placeholder: "6\u6587\u5B57\u4EE5\u4E0A"
          }
        )
      ] }),
      authError && /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2", children: authError }),
      authMessage && /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2", children: authMessage }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          disabled: authSubmitting,
          className: "w-full bg-blue-600 disabled:bg-blue-300 text-white font-bold py-3 rounded-xl shadow-md flex justify-center items-center gap-2 active:bg-blue-700 transition-colors",
          children: [
            /* @__PURE__ */ jsx(User, { size: 18 }),
            authSubmitting ? "\u51E6\u7406\u4E2D..." : authMode === "login" ? "\u30ED\u30B0\u30A4\u30F3\u3059\u308B" : "\u767B\u9332\u3059\u308B"
          ]
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mx-auto h-[100dvh] max-h-[100dvh] overflow-hidden bg-gray-100 flex flex-col select-none font-sans", children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 bg-neutral-900 shadow-md pt-[env(safe-area-inset-top)]", children: /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 text-white px-4 py-3 flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-[10px] font-bold text-blue-400 uppercase tracking-widest leading-none flex items-center gap-2", children: [
          activeTab === "calc" ? "Calculator" : activeTab === "column" ? "Strategy Notes" : "Ruko App",
          IS_ADMIN_MODE && /* @__PURE__ */ jsx("span", { className: "bg-red-500 text-white px-1.5 rounded-sm text-[8px]", children: "Admin Mode" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          IS_ADMIN_MODE && isEditing && /* @__PURE__ */ jsx("button", { onClick: exportData, className: "p-1.5 rounded-full bg-green-600 text-white shadow-lg transition-all active:scale-95 flex items-center justify-center", children: /* @__PURE__ */ jsx(Download, { size: 14 }) }),
          IS_ADMIN_MODE && activeTab !== "ai" && /* @__PURE__ */ jsx("button", { onClick: () => setIsEditing(!isEditing), className: `p-1.5 rounded-full transition-all shadow-lg ${isEditing ? "bg-red-500 rotate-90" : "bg-blue-600"}`, children: isEditing ? /* @__PURE__ */ jsx(X, { size: 14 }) : /* @__PURE__ */ jsx(Edit2, { size: 14 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mt-1", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base font-black italic leading-tight", children: activeTab === "ruko" ? "8\u67086\u65E5\u7248\u3000\u6700\u65B0\u72D9\u3044\u76EETier\u8868" : activeTab === "list" ? "\u72D9\u3044\u76EE\u4E00\u89A7" : activeTab === "column" ? "\u653B\u7565\u601D\u8003\u96C6" : "\u4ED5\u4E8B\u91CF\u7BA1\u7406" }),
        activeTab !== "workload" && activeTab !== "column" && /* @__PURE__ */ jsx("p", { className: "text-[9px] text-red-500 whitespace-nowrap ml-2 pb-0.5 font-medium", children: "\u62FE\u3044\u3084\u3059\u3055\xD7\u671F\u5F85\u5024" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 min-h-0 overflow-y-auto pb-20", style: { scrollbarGutter: "stable" }, children: [
      activeTab === "column" && (session ? /* @__PURE__ */ jsxs("div", { className: "p-4 bg-gray-50 min-h-full flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 space-y-4", children: !activeStrategySection ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-lg font-black text-gray-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BookOpen, { size: 20, className: "text-blue-500" }),
            "\u653B\u7565\u601D\u8003\u96C6"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2", children: STRATEGY_SECTION_DATA.filter((section) => !section.hiddenFromStrategyIndex).map((section) => {
            const SectionIcon = section.icon;
            const styles = STRATEGY_ACCENT_STYLES[section.accent] || STRATEGY_ACCENT_STYLES.blue;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                disabled: section.isDraft,
                onClick: () => {
                  if (!section.isDraft) setActiveStrategySectionId(section.id);
                },
                className: `w-full border rounded-xl px-3 py-3 flex items-center gap-3 text-left transition-colors ${styles.inactiveButton} ${section.isDraft ? "opacity-90 cursor-default" : ""}`,
                children: [
                  /* @__PURE__ */ jsx("span", { className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${styles.icon}`, children: /* @__PURE__ */ jsx(SectionIcon, { size: 20 }) }),
                  /* @__PURE__ */ jsxs("span", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxs("span", { className: "block text-sm font-black leading-tight", children: [
                      section.title,
                      section.isDraft && /* @__PURE__ */ jsx("span", { className: "ml-2 text-[10px] text-red-500 align-middle", children: "\u4F5C\u6210\u4E2D" })
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "block text-[11px] font-bold text-gray-500 mt-1", children: section.subtitle }),
                    /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-black text-gray-400 mt-1", children: section.isDraft ? "\u4F5C\u6210\u4E2D" : section.id === "links" ? `${shortcutLinks.length}\u4EF6\u306E\u30EA\u30F3\u30AF` : `${section.items.length}\u672C\u306E\u8A18\u4E8B` })
                  ] }),
                  !section.isDraft && /* @__PURE__ */ jsx(ChevronRight, { size: 16, className: "text-gray-400" })
                ]
              },
              section.id
            );
          }) })
        ] }) : /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveStrategySectionId(null),
              className: "inline-flex items-center gap-1.5 text-xs font-black text-gray-600 bg-white border border-gray-200 rounded-lg px-3 py-2 active:bg-gray-50",
              children: [
                /* @__PURE__ */ jsx(ChevronLeft, { size: 16 }),
                "\u653B\u7565\u601D\u8003\u96C6\u306B\u623B\u308B"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-1", children: [
            /* @__PURE__ */ jsx("span", { className: `w-8 h-8 rounded-lg flex items-center justify-center ${activeStrategyStyles.icon}`, children: /* @__PURE__ */ jsx(ActiveStrategyIcon, { size: 18 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-gray-400", children: activeStrategySection.id === "links" ? `${shortcutLinks.length} LINKS` : `${activeStrategySection.items.length} NOTES` }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-black text-gray-900", children: activeStrategySection.title })
            ] })
          ] }),
          activeStrategySection.id === "links" ? /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-black text-gray-500 mb-1", children: "\u30EA\u30F3\u30AF\u540D" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: shortcutLinkForm.title,
                    onChange: (e) => setShortcutLinkForm((prev) => ({ ...prev, title: e.target.value })),
                    className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
                    placeholder: "\u4F8B: \u3061\u3087\u3093\u307C\u308A\u3059\u305F"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-black text-gray-500 mb-1", children: "URL" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "url",
                    value: shortcutLinkForm.url,
                    onChange: (e) => setShortcutLinkForm((prev) => ({ ...prev, url: e.target.value })),
                    className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
                    placeholder: "https://..."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-black text-gray-500 mb-1", children: "\u30E1\u30E2" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: shortcutLinkForm.memo,
                    onChange: (e) => setShortcutLinkForm((prev) => ({ ...prev, memo: e.target.value })),
                    className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
                    placeholder: "\u4F8B: \u89E3\u6790\u78BA\u8A8D\u7528"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: saveShortcutLink,
                  className: "w-full bg-neutral-900 text-white rounded-xl py-3 text-sm font-black flex items-center justify-center gap-2 active:bg-neutral-700",
                  children: [
                    /* @__PURE__ */ jsx(Plus, { size: 16 }),
                    "\u30EA\u30F3\u30AF\u3092\u8FFD\u52A0"
                  ]
                }
              )
            ] }),
            shortcutLinks.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-dashed border-gray-300 p-5 text-center", children: [
              /* @__PURE__ */ jsx(LinkIcon, { size: 22, className: "mx-auto text-gray-400 mb-2" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-gray-700", children: "\u307E\u3060\u30EA\u30F3\u30AF\u304C\u3042\u308A\u307E\u305B\u3093" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs font-bold text-gray-500", children: "\u3088\u304F\u898B\u308B\u653B\u7565\u30B5\u30A4\u30C8\u3084\u5730\u57DF\u60C5\u5831\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002" })
            ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-2", children: shortcutLinks.map((link) => /* @__PURE__ */ jsxs("article", { className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex items-stretch", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => openShortcutLink(link.url),
                  className: "min-w-0 flex-1 p-3 flex items-center gap-3 text-left active:bg-blue-50 transition-colors",
                  "aria-label": `${link.title}\u3092\u958B\u304F`,
                  children: [
                    /* @__PURE__ */ jsxs("span", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "block text-sm font-black text-gray-900 truncate", children: link.title }),
                      /* @__PURE__ */ jsx("span", { className: "block mt-0.5 text-[11px] font-bold text-blue-600 truncate", children: link.url }),
                      link.memo && /* @__PURE__ */ jsx("span", { className: "block mt-1 text-[11px] font-bold text-gray-500", children: link.memo })
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(ExternalLink, { size: 16 }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: (e) => {
                    e.stopPropagation();
                    deleteShortcutLink(link.id);
                  },
                  className: "w-11 bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 active:bg-red-100 border-l border-red-100",
                  "aria-label": `${link.title}\u3092\u524A\u9664`,
                  children: /* @__PURE__ */ jsx(Trash2, { size: 16 })
                }
              )
            ] }, link.id)) })
          ] }) : activeStrategySection.items.map((item) => /* @__PURE__ */ jsx("article", { className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: `px-2 py-1 rounded-lg text-xs font-black leading-none ${activeStrategyStyles.badge}`, children: item.number }),
              /* @__PURE__ */ jsx("h4", { className: "text-[15px] font-black text-gray-900 leading-snug", children: item.title })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-gray-700 leading-relaxed font-bold whitespace-pre-line", children: renderHighlightedText(item.body, item.highlights) }),
            /* @__PURE__ */ jsxs("p", { className: `mt-3 border rounded-lg px-3 py-2 text-xs leading-relaxed font-black whitespace-pre-line ${activeStrategyStyles.quote}`, children: [
              "\u300C",
              item.quote,
              "\u300D"
            ] }),
            item.link && /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => openShortcutLink(item.link),
                className: "mt-3 w-full bg-blue-50 border border-blue-100 text-blue-600 rounded-xl px-3 py-2.5 text-xs font-black flex items-center justify-center gap-2 active:bg-blue-100",
                children: [
                  /* @__PURE__ */ jsx(ExternalLink, { size: 14 }),
                  "\u8A73\u3057\u3044\u89E3\u8AAC\u8A18\u4E8B\u3092\u898B\u308B"
                ]
              }
            )
          ] }) }, item.number))
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-3 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-gray-400", children: "\u30ED\u30B0\u30A4\u30F3\u4E2D" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-gray-800 truncate", children: session.user?.email })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: handleLogout,
              className: "flex-shrink-0 px-3 py-2 rounded-lg bg-gray-100 text-gray-600 text-xs font-black flex items-center gap-1.5 active:bg-gray-200",
              children: [
                /* @__PURE__ */ jsx(LogOut, { size: 14 }),
                " \u30ED\u30B0\u30A2\u30A6\u30C8"
              ]
            }
          )
        ] }) })
      ] }) : renderMemberGate(
        "\u4F1A\u54E1\u9650\u5B9A\u30B3\u30F3\u30C6\u30F3\u30C4\u3067\u3059",
        "\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u3068\u3001\u653B\u7565\u601D\u8003\u30FB\u65C5\u6253\u3061\u60C5\u5831\u30FB\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30EA\u30F3\u30AF\u3092\u4F7F\u3048\u307E\u3059\u3002"
      )),
      activeTab === "workload" && /* @__PURE__ */ jsx("div", { className: "p-4 space-y-4 bg-gray-50 min-h-full", children: !supabase ? /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Database, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-base font-black text-gray-900", children: "Supabase\u8A2D\u5B9A\u304C\u5FC5\u8981\u3067\u3059" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-gray-600 font-medium", children: "\u4ED5\u4E8B\u91CF\u30BF\u30D6\u306F\u30ED\u30B0\u30A4\u30F3\u4F1A\u54E1\u9650\u5B9A\u3067\u3059\u3002`SUPABASE_URL` \u3068 `SUPABASE_ANON_KEY` \u3092\u8A2D\u5B9A\u3059\u308B\u3068\u3001\u30ED\u30B0\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0\u3068\u30E6\u30FC\u30B6\u30FC\u5225\u4FDD\u5B58\u304C\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002" })
        ] })
      ] }) }) : authLoading ? /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center", children: [
        /* @__PURE__ */ jsx(RefreshCw, { size: 22, className: "mx-auto mb-3 text-blue-500 animate-spin" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-gray-700", children: "\u30ED\u30B0\u30A4\u30F3\u72B6\u614B\u3092\u78BA\u8A8D\u4E2D..." })
      ] }) : !session ? /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(User, { size: 20 }) }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-base font-black text-gray-900", children: "\u4ED5\u4E8B\u91CF\u306F\u4F1A\u54E1\u9650\u5B9A\u3067\u3059" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs leading-relaxed text-gray-600 font-medium", children: "\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u3068\u3001\u81EA\u5206\u5C02\u7528\u306E\u4ED5\u4E8B\u91CF\u30AB\u30EC\u30F3\u30C0\u30FC\u3068\u7A3C\u50CD\u8A18\u9332\u3092\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4 bg-gray-100 p-1 rounded-xl", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setAuthMode("login");
                setAuthError("");
                setAuthMessage("");
              },
              className: `py-2 rounded-lg text-xs font-black transition-colors ${authMode === "login" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`,
              children: "\u30ED\u30B0\u30A4\u30F3"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setAuthMode("signup");
                setAuthError("");
                setAuthMessage("");
              },
              className: `py-2 rounded-lg text-xs font-black transition-colors ${authMode === "signup" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`,
              children: "\u65B0\u898F\u767B\u9332"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleAuthSubmit, className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-gray-600 mb-1", children: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                value: authForm.email,
                onChange: (e) => setAuthForm((prev) => ({ ...prev, email: e.target.value })),
                className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
                placeholder: "email@example.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-gray-600 mb-1", children: "\u30D1\u30B9\u30EF\u30FC\u30C9" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "password",
                value: authForm.password,
                onChange: (e) => setAuthForm((prev) => ({ ...prev, password: e.target.value })),
                className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
                placeholder: "6\u6587\u5B57\u4EE5\u4E0A"
              }
            )
          ] }),
          authError && /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2", children: authError }),
          authMessage && /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2", children: authMessage }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              disabled: authSubmitting,
              className: "w-full bg-blue-600 disabled:bg-blue-300 text-white font-bold py-3 rounded-xl shadow-md flex justify-center items-center gap-2 active:bg-blue-700 transition-colors",
              children: [
                /* @__PURE__ */ jsx(User, { size: 18 }),
                authSubmitting ? "\u51E6\u7406\u4E2D..." : authMode === "login" ? "\u30ED\u30B0\u30A4\u30F3\u3059\u308B" : "\u767B\u9332\u3059\u308B"
              ]
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        (hasLocalBackup || authMessage) && /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-3", children: [
          hasLocalBackup && /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: migrateLocalWorkloads,
              disabled: isMigratingWorkloads,
              className: "w-full bg-neutral-900 disabled:bg-gray-400 text-white text-xs font-black py-2.5 rounded-xl flex items-center justify-center gap-2 active:bg-neutral-800",
              children: [
                /* @__PURE__ */ jsx(UploadCloud, { size: 16 }),
                isMigratingWorkloads ? "\u79FB\u884C\u4E2D..." : "\u3053\u306E\u7AEF\u672B\u306E\u8A18\u9332\u3092\u79FB\u884C"
              ]
            }
          ),
          authMessage && /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2", children: authMessage })
        ] }),
        workloadError && /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-100 rounded-xl p-3 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-red-600 leading-relaxed", children: workloadError }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => fetchMonthWorkloads(currentDate),
              className: "flex-shrink-0 px-2.5 py-1.5 rounded-lg bg-white text-red-500 text-xs font-black border border-red-100 flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsx(RefreshCw, { size: 13 }),
                " \u518D\u8AAD\u307F\u8FBC\u307F"
              ]
            }
          )
        ] }),
        workloadLoading ? /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center", children: [
          /* @__PURE__ */ jsx(RefreshCw, { size: 22, className: "mx-auto mb-3 text-blue-500 animate-spin" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-gray-700", children: "\u4ED5\u4E8B\u91CF\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D..." })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 text-white px-3 py-2.5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => changeMonth(-1),
                  className: "p-1.5 rounded-full bg-white/15 active:bg-white/25 transition-colors",
                  "aria-label": "\u524D\u306E\u6708",
                  children: /* @__PURE__ */ jsx(ChevronLeft, { size: 18 })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "text-center leading-tight", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-black tracking-wide", children: displayMonthStr(currentDate) }),
                /* @__PURE__ */ jsx("p", { className: "text-xs font-black text-yellow-400", children: formatSignedAmount(monthTotalWorkValue, true) })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => changeMonth(1),
                  className: "p-1.5 rounded-full bg-white/15 active:bg-white/25 transition-colors",
                  "aria-label": "\u6B21\u306E\u6708",
                  children: /* @__PURE__ */ jsx(ChevronRight, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 bg-gray-50 border-b border-gray-200", children: CALENDAR_WEEKDAYS.map((day, idx) => /* @__PURE__ */ jsx(
              "div",
              {
                className: `h-7 flex items-center justify-center text-xs font-black ${idx === 0 ? "text-red-400" : idx === 6 ? "text-blue-500" : "text-gray-500"}`,
                children: day
              },
              day
            )) }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7", children: calendarDays.map((date, idx) => {
              if (!date) {
                return /* @__PURE__ */ jsx("div", { className: "h-12 bg-gray-50/70 border-r border-b border-gray-100 last:border-r-0" }, `blank-${idx}`);
              }
              const dateKey = formatDateStr(date);
              const dayTotal = getDateTotalWorkValue(date);
              const hasWorkloads = monthWorkloads.some((item) => item.date === dateKey);
              const isSelected = dateKey === selectedDateKey;
              const isToday = dateKey === todayKey;
              const weekday = date.getDay();
              return /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => selectCalendarDate(date),
                  "aria-label": `${date.getMonth() + 1}\u6708${date.getDate()}\u65E5\u3092\u9078\u629E`,
                  className: `relative h-12 min-w-0 border-r border-b border-gray-100 px-1.5 py-1 text-left transition-colors active:bg-blue-50 ${isSelected ? "bg-blue-50 ring-2 ring-inset ring-blue-500 z-10" : "bg-white hover:bg-gray-50"}`,
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: `text-base font-black leading-none ${isSelected ? "text-blue-700" : weekday === 0 ? "text-red-500" : weekday === 6 ? "text-blue-600" : "text-gray-800"}`, children: date.getDate() }),
                      isToday && /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-yellow-400 mt-0.5 flex-shrink-0" })
                    ] }),
                    hasWorkloads && /* @__PURE__ */ jsx("p", { className: `mt-1.5 w-full text-center ${getCalendarWorkValueTextClass(dayTotal)} font-black leading-none whitespace-nowrap ${dayTotal > 0 ? "text-blue-700" : dayTotal < 0 ? "text-red-500" : "text-gray-400"}`, children: formatSignedAmount(dayTotal) })
                  ]
                },
                dateKey
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setIsWorkloadModalOpen(true),
              className: "w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-md flex justify-center items-center gap-2 active:bg-blue-700 transition-colors",
              children: [
                /* @__PURE__ */ jsx(Plus, { size: 20 }),
                " \u65B0\u898F\u7A3C\u50CD\u3092\u8A18\u9332\u3059\u308B"
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 mt-4", children: currentWorkloads.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center text-gray-400 py-10 text-sm font-bold bg-white rounded-xl border border-gray-100 border-dashed", children: "\u7A3C\u50CD\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093" }) : currentWorkloads.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-2 pr-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-black text-gray-800", children: item.machineName }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-gray-400 font-bold block mb-0.5", children: "\u4ED5\u4E8B\u91CF" }),
                /* @__PURE__ */ jsxs("span", { className: `font-black text-lg ${item.workValue >= 0 ? "text-blue-600" : "text-red-500"}`, children: [
                  item.workValue > 0 ? "+" : "",
                  item.workValue.toLocaleString(),
                  "\u5186"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3 text-xs font-medium text-gray-500 bg-gray-50 p-2 rounded-lg mb-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                "\u6A5F\u68B0\u5272: ",
                item.payoutRate,
                "%"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Clock, { size: 12 }),
                " ",
                item.playTime,
                "\u5206"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                "\u56DE\u8EE2: ",
                item.playCount,
                "G"
              ] })
            ] }),
            item.memo && /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 whitespace-pre-wrap bg-gray-100 p-2 rounded-lg mt-2", children: item.memo }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => deleteWorkload(formatDateStr(currentDate), item.id),
                disabled: deletingWorkloadId === item.id,
                className: "absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors p-1 disabled:opacity-40",
                "aria-label": "\u7A3C\u50CD\u8A18\u9332\u3092\u524A\u9664",
                children: /* @__PURE__ */ jsx(Trash2, { size: 16 })
              }
            )
          ] }, item.id)) })
        ] })
      ] }) }),
      activeTab === "list" && (session ? /* @__PURE__ */ jsxs("div", { className: "p-3 space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-3 shadow-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
            /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-blue-500" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-black text-gray-700", children: "\u72D9\u3048\u308B\u6642\u9593\u5E2F\u3067\u7D5E\u308A\u8FBC\u307F" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-1.5", children: TARGET_TIME_SLOT_OPTIONS.map((option) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setTargetTimeSort(option.id),
              className: `rounded-lg border px-2 py-2 text-[11px] font-black transition-colors ${targetTimeSort === option.id ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm" : "border-gray-200 bg-gray-50 text-gray-600 active:bg-gray-100"}`,
              children: option.label
            },
            option.id
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-gray-100", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
              /* @__PURE__ */ jsx(Tag, { size: 14, className: "text-blue-500" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs font-black text-gray-700", children: "\u72D9\u3044\u65B9\u30BF\u30B0\u3067\u7D5E\u308A\u8FBC\u307F" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-1.5", children: TARGET_TAG_FILTER_OPTIONS.map((option) => /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setTargetTagFilter(option.id),
                className: `rounded-lg border px-2 py-2 text-[11px] font-black transition-colors ${targetTagFilter === option.id ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm" : "border-gray-200 bg-gray-50 text-gray-600 active:bg-gray-100"}`,
                children: option.label
              },
              option.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mb-2", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", size: 18 }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "\u6A5F\u7A2E\u540D\u3084\u72D9\u3044\u76EE\u3067\u691C\u7D22...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 shadow-sm font-bold text-gray-700"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          listItems.map((item) => /* @__PURE__ */ jsxs(
            "div",
            {
              onClick: () => {
                if (!isEditing) {
                  setDetailModalConfig({ isOpen: true, item });
                  setIsMemoEditing(false);
                  setEditingMemoText(item.memo || "");
                }
              },
              className: `bg-white rounded-xl border ${isEditing ? "border-blue-300" : "border-gray-200"} p-3 flex items-center gap-3 shadow-sm active:bg-blue-50 transition-colors ${!isEditing ? "cursor-pointer" : ""}`,
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-700", children: /* @__PURE__ */ jsx(CardImage, { url: item.imageUrl, name: item.name, tag: item.tag, tagColor: item.tagColor, hasLink: !!item.link }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 py-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxs("span", { className: "bg-gray-100 text-gray-600 text-[10px] font-black px-1.5 py-0.5 rounded border border-gray-200", children: [
                      "Tier: ",
                      item.tier
                    ] }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-sm truncate text-gray-800", children: item.name })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 truncate font-medium", children: item.detail }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: getTargetTagNames(item).map((tagName, idx) => {
                    const colors = item.tagColor ? item.tagColor.split(",") : [];
                    const color = colors[idx] ? colors[idx].trim() : colors[0] || "bg-gray-100";
                    const isActiveTag = targetTagFilter !== "all" && (tagName.includes(targetTagFilter) || targetTagFilter.includes(tagName));
                    return /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `text-[9px] font-black px-1.5 py-0.5 rounded border ${isActiveTag ? "bg-blue-600 border-blue-600 text-white" : `${color} border-transparent text-black`}`,
                        children: tagName
                      },
                      `${item.id}-tag-${tagName}`
                    );
                  }) }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: item.timeSlots.map((slotId) => /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `text-[9px] font-black px-1.5 py-0.5 rounded border ${targetTimeSort === slotId ? "bg-blue-600 border-blue-600 text-white" : "bg-gray-50 border-gray-200 text-gray-500"}`,
                      children: getTargetTimeLabel(slotId)
                    },
                    `${item.id}-${slotId}`
                  )) })
                ] }),
                IS_ADMIN_MODE && isEditing && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 pl-2 border-l border-gray-100", children: [
                  /* @__PURE__ */ jsx("button", { onClick: (e) => {
                    e.stopPropagation();
                    setFormData({ ...item });
                    setModalConfig({ isOpen: true, mode: "edit", itemId: item.id });
                  }, className: "p-2 text-blue-600 bg-blue-50 rounded-full", children: /* @__PURE__ */ jsx(Edit2, { size: 14 }) }),
                  /* @__PURE__ */ jsx("button", { onClick: (e) => {
                    e.stopPropagation();
                    deleteItem(item.id);
                  }, className: "p-2 text-red-600 bg-red-50 rounded-full", children: /* @__PURE__ */ jsx(Trash2, { size: 14 }) })
                ] })
              ]
            },
            item.id
          )),
          listItems.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center text-gray-400 py-10 text-sm font-bold", children: "\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F" })
        ] })
      ] }) : renderMemberGate(
        "\u4F1A\u54E1\u9650\u5B9A\u30B3\u30F3\u30C6\u30F3\u30C4\u3067\u3059",
        "\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u3068\u3001\u6A5F\u7A2E\u5225\u306E\u72D9\u3044\u76EE\u4E00\u89A7\u3092\u95B2\u89A7\u3067\u304D\u307E\u3059\u3002"
      )),
      activeTab === "ruko" && /* @__PURE__ */ jsxs("div", { className: "p-2 space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-3 shadow-sm border-l-4 border-l-blue-500", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-xs font-black text-gray-800 mb-1.5 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(MessageSquare, { size: 14, className: "text-blue-500" }),
            CURRENT_ENVIRONMENT_NOTE.updatedAt,
            " ",
            CURRENT_ENVIRONMENT_NOTE.title
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-gray-600 font-medium leading-snug whitespace-pre-wrap", children: CURRENT_ENVIRONMENT_NOTE.body })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: goToShortcutLinks,
            className: "w-full bg-gray-100 text-gray-700 rounded-lg px-3 py-1.5 shadow-sm border border-gray-200 flex items-center justify-between gap-3 active:bg-gray-200 transition-colors",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-md bg-gray-700 text-white flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(LinkIcon, { size: 13 }) }),
                /* @__PURE__ */ jsx("span", { className: "min-w-0 text-left", children: /* @__PURE__ */ jsx("span", { className: "block text-xs font-black leading-tight truncate", children: "\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30EA\u30F3\u30AF" }) })
              ] }),
              /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "flex-shrink-0 text-gray-400" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: goToAugustNewMachineNotes,
            className: "w-full bg-gray-100 text-gray-700 rounded-lg px-3 py-1.5 shadow-sm border border-gray-200 flex items-center justify-between gap-3 active:bg-gray-200 transition-colors",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-md bg-red-600 text-white flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Calendar, { size: 13 }) }),
                /* @__PURE__ */ jsx("span", { className: "min-w-0 text-left", children: /* @__PURE__ */ jsx("span", { className: "block text-xs font-black leading-tight truncate", children: "8\u6708\u65B0\u53F0\u306E\u72D9\u3044\u76EE\u8003\u5BDF" }) })
              ] }),
              /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "flex-shrink-0 text-gray-400" })
            ]
          }
        ),
        TIER_CONFIG.map((tier) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `relative rounded-2xl p-1 transition-all duration-300 ${dragOverTier === tier.id ? "bg-blue-200/50 scale-[1.02] ring-2 ring-blue-400 ring-dashed" : ""}`,
            onDragOver: (e) => {
              e.preventDefault();
              if (draggedItemId) setDragOverTier(tier.id);
            },
            onDragLeave: () => setDragOverTier(null),
            onDrop: (e) => {
              e.preventDefault();
              if (draggedItemId) moveItem(draggedItemId, tier.id);
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: `w-full h-8 rounded-full mb-2 flex items-center px-5 shadow-lg ${tier.bg} text-white border-b-4 border-black/20`, children: /* @__PURE__ */ jsx("span", { className: "text-xl font-black italic tracking-tighter drop-shadow-lg", children: tier.label }) }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 min-h-[72px]", children: filteredItems.filter((i) => i.tier === tier.id).map((item) => /* @__PURE__ */ jsxs(
                "div",
                {
                  draggable: canDrag,
                  onDragStart: (e) => {
                    if (canDrag) {
                      setDraggedItemId(item.id);
                      e.dataTransfer.effectAllowed = "move";
                    }
                  },
                  onDragEnd: () => {
                    setDraggedItemId(null);
                    setDragOverTier(null);
                  },
                  onClick: () => {
                    if (!isEditing) {
                      setDetailModalConfig({ isOpen: true, item });
                      setIsMemoEditing(false);
                      setEditingMemoText(item.memo || "");
                    }
                  },
                  className: `bg-white border-2 border-blue-500 rounded-xl overflow-hidden shadow-md relative transition-all ${canDrag ? "cursor-grab" : "cursor-pointer"} ${draggedItemId === item.id ? "opacity-20 scale-90" : "active:scale-95"} hover:border-blue-400`,
                  children: [
                    /* @__PURE__ */ jsx(CardImage, { url: item.imageUrl, name: item.name, tag: item.tag, tagColor: item.tagColor, hasLink: !!item.link, compact: true }),
                    /* @__PURE__ */ jsx("div", { className: "p-1.5 bg-neutral-900 text-blue-200 text-[10px] leading-tight min-h-[40px] flex items-center border-t border-neutral-800 italic", children: item.detail }),
                    IS_ADMIN_MODE && isEditing && /* @__PURE__ */ jsxs("div", { className: "absolute top-1 right-1 flex flex-col gap-1 z-20", children: [
                      /* @__PURE__ */ jsx("button", { onClick: (e) => {
                        e.stopPropagation();
                        deleteItem(item.id);
                      }, className: "bg-red-600 text-white rounded-full p-1.5 shadow-xl hover:bg-red-700", children: /* @__PURE__ */ jsx(Trash2, { size: 12 }) }),
                      /* @__PURE__ */ jsx("button", { onClick: (e) => {
                        e.stopPropagation();
                        setFormData({ ...item });
                        setModalConfig({ isOpen: true, mode: "edit", itemId: item.id });
                      }, className: "bg-blue-600 text-white rounded-full p-1.5 shadow-xl hover:bg-blue-700", children: /* @__PURE__ */ jsx(Edit2, { size: 12 }) })
                    ] })
                  ]
                },
                item.id
              )) })
            ]
          },
          tier.id
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-16 bg-white border-t border-gray-200 flex justify-around items-center py-2 z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab("ruko"), className: `flex flex-col items-center justify-center w-full h-full gap-1 ${activeTab === "ruko" ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}`, children: [
        /* @__PURE__ */ jsx(Trophy, { size: 20, className: activeTab === "ruko" ? "fill-blue-100" : "" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold", children: "Tier\u8868" })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab("list"), className: `flex flex-col items-center justify-center w-full h-full gap-1 ${activeTab === "list" ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}`, children: [
        /* @__PURE__ */ jsx(List, { size: 20 }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold", children: "\u72D9\u3044\u76EE\u4E00\u89A7" })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab("workload"), className: `flex flex-col items-center justify-center w-full h-full gap-1 ${activeTab === "workload" ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}`, children: [
        /* @__PURE__ */ jsx(Coins, { size: 20, className: activeTab === "workload" ? "fill-blue-100" : "" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold", children: "\u4ED5\u4E8B\u91CF" })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: () => {
        setActiveTab("column");
        setActiveStrategySectionId(null);
      }, className: `flex flex-col items-center justify-center w-full h-full gap-1 ${activeTab === "column" ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}`, children: [
        /* @__PURE__ */ jsx(BookOpen, { size: 20, className: activeTab === "column" ? "fill-blue-100" : "" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold", children: "\u653B\u7565\u601D\u8003\u96C6" })
      ] })
    ] }),
    isWorkloadModalOpen && session && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/60 z-[120] flex items-center justify-center p-4 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-lg font-black mb-4 text-gray-800 border-b pb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Plus, { size: 18, className: "text-blue-500" }),
        "\u7A3C\u50CD\u3092\u8A18\u9332 (",
        displayDateStr(currentDate),
        ")"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 max-h-[60vh] overflow-y-auto pr-1", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-gray-600 mb-1", children: "\u6A5F\u7A2E\u540D\u30FB\u72D9\u3044\u76EE" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none", size: 16 }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  role: "combobox",
                  "aria-expanded": isMachineDropdownOpen,
                  "aria-controls": "machine-option-list",
                  "aria-autocomplete": "list",
                  autoComplete: "off",
                  value: workloadForm.machineName,
                  onFocus: () => setIsMachineDropdownOpen(true),
                  onBlur: () => setTimeout(() => setIsMachineDropdownOpen(false), 120),
                  onChange: (e) => {
                    setWorkloadForm({ ...workloadForm, machineName: e.target.value });
                    setIsMachineDropdownOpen(true);
                  },
                  onKeyDown: handleMachineInputKeyDown,
                  className: "w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-10 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
                  placeholder: "\u6A5F\u7A2E\u540D\u3092\u691C\u7D22..."
                }
              ),
              /* @__PURE__ */ jsx(ChevronDown, { size: 16, className: `absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-transform ${isMachineDropdownOpen ? "rotate-180" : ""}` })
            ] }),
            isMachineDropdownOpen && /* @__PURE__ */ jsx("div", { id: "machine-option-list", role: "listbox", className: "mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-h-52 overflow-y-auto", children: filteredMachineOptions.length > 0 ? filteredMachineOptions.map((option, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                role: "option",
                "aria-selected": idx === activeMachineOptionIndex,
                onMouseDown: (e) => e.preventDefault(),
                onClick: () => selectMachineOption(option),
                onMouseEnter: () => setActiveMachineOptionIndex(idx),
                className: `w-full text-left px-3 py-2.5 border-b border-gray-100 last:border-b-0 transition-colors ${idx === activeMachineOptionIndex ? "bg-blue-50" : "bg-white hover:bg-gray-50"}`,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-black text-gray-800 leading-tight", children: option.name }),
                    idx === activeMachineOptionIndex && /* @__PURE__ */ jsx(Check, { size: 14, className: "text-blue-500 flex-shrink-0" })
                  ] }),
                  (option.maker || option.introducedAt) && /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-2 text-[10px] font-bold text-gray-400", children: [
                    option.maker && /* @__PURE__ */ jsx("span", { children: option.maker }),
                    option.introducedAt && /* @__PURE__ */ jsxs("span", { children: [
                      option.introducedAt,
                      "\u5C0E\u5165"
                    ] })
                  ] })
                ]
              },
              `${option.name}-${idx}`
            )) : /* @__PURE__ */ jsx("div", { className: "px-3 py-3 text-xs font-bold text-gray-400", children: "\u5019\u88DC\u306A\u3057\u3002\u5165\u529B\u3057\u305F\u540D\u524D\u3067\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002" }) }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-[10px] font-bold text-gray-400", children: "\u5019\u88DC\u5916\u3082\u305D\u306E\u307E\u307E\u4FDD\u5B58\u3067\u304D\u307E\u3059" })
          ] })
        ] }),
        targetPreset && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-gray-600 mb-1", children: "\u72D9\u3044\u76EE" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: targetPreset.targets.map((target) => /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              "data-target-preset": target.label,
              onClick: () => applyTargetPreset(target),
              className: `rounded-lg border px-3 py-2 text-xs font-black transition-colors ${selectedTargetLabel === target.label ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm" : "border-gray-200 bg-white text-gray-700 active:bg-gray-50"}`,
              children: [
                target.label,
                /* @__PURE__ */ jsxs("span", { className: "block mt-0.5 text-[10px] font-bold opacity-70", children: [
                  target.payoutRate,
                  "%"
                ] })
              ]
            },
            target.label
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-xs font-bold text-gray-600 mb-1 flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "\u60F3\u5B9A\u6A5F\u68B0\u5272 (%)" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-normal text-gray-400", children: "101% = \u6642\u7D66500\u5186" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              step: "0.5",
              value: workloadForm.payoutRate,
              onKeyDown: handlePayoutRateKeyDown,
              onChange: (e) => {
                setSelectedTargetLabel("");
                setWorkloadForm({ ...workloadForm, payoutRate: e.target.value });
              },
              className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
              placeholder: "\u4F8B: 105"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-[11px] font-black text-red-500 leading-relaxed", children: [
          "\u203B\u6253\u3063\u3066\u3044\u305F\u6642\u9593\u304B\u56DE\u8EE2\u6570\u3092\u5165\u529B\u3002",
          /* @__PURE__ */ jsx("br", {}),
          "\u958B\u59CB/\u7D42\u4E86\u6642\u523B\u3067\u3082\u7A3C\u50CD\u6642\u9593\u3092\u81EA\u52D5\u8A08\u7B97\u3067\u304D\u307E\u3059\u3002"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-gray-600 mb-1", children: "\u6253\u3061\u59CB\u3081 / \u6253\u3061\u7D42\u308F\u308A" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold text-gray-500 mb-1", children: "\u6253\u3061\u59CB\u3081" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "time",
                  value: workloadForm.startTime,
                  onChange: handleWorkloadStartTimeChange,
                  className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
                  "aria-label": "\u6253\u3061\u59CB\u3081\u306E\u6642\u9593"
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setWorkloadClockNow("startTime"),
                  className: "mt-1 w-full rounded-md border border-gray-200 bg-gray-100 px-2 py-1 text-[10px] font-black text-gray-700 flex items-center justify-center gap-1 active:bg-gray-200",
                  children: [
                    /* @__PURE__ */ jsx(Clock, { size: 11 }),
                    "\u73FE\u5728\u6642\u523B"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold text-gray-500 mb-1", children: "\u6253\u3061\u7D42\u308F\u308A" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "time",
                  value: workloadForm.endTime,
                  onChange: handleWorkloadEndTimeChange,
                  className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
                  "aria-label": "\u6253\u3061\u7D42\u308F\u308A\u306E\u6642\u9593"
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setWorkloadClockNow("endTime"),
                  className: "mt-1 w-full rounded-md border border-gray-200 bg-gray-100 px-2 py-1 text-[10px] font-black text-gray-700 flex items-center justify-center gap-1 active:bg-gray-200",
                  children: [
                    /* @__PURE__ */ jsx(Clock, { size: 11 }),
                    "\u73FE\u5728\u6642\u523B"
                  ]
                }
              )
            ] })
          ] }),
          workloadTimeRangeMinutes !== "" && /* @__PURE__ */ jsxs("p", { className: "mt-1 text-[10px] font-bold text-gray-500", children: [
            workloadTimeRangeMinutes,
            "\u5206\u3092\u7A3C\u50CD\u6642\u9593\u306B\u53CD\u6620"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-gray-600 mb-1", children: "\u7A3C\u50CD\u6642\u9593 (\u5206)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                step: "10",
                min: "0",
                value: workloadForm.playTime,
                onKeyDown: handleWorkloadTimeKeyDown,
                onChange: handleWorkloadTimeChange,
                className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
                placeholder: "\u4F8B: 60"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-gray-600 mb-1", children: "\u56DE\u8EE2\u6570 (\u76EE\u5B89)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                value: workloadForm.playCount,
                onChange: handleWorkloadCountChange,
                className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold",
                placeholder: "\u4F8B: 800"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] text-gray-400 text-right mb-2", children: "\u203B\u6642\u9593\u3068\u56DE\u8EE2\u6570\u306F\u9023\u52D5 (1\u6642\u9593=800G)" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl px-4 py-3 text-gray-900 shadow-sm border border-gray-300 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 font-black", children: "\u4ED5\u4E8B\u91CF" }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-xl font-black whitespace-nowrap text-gray-900", children: [
            workloadPreviewValue > 0 ? "+" : "",
            workloadPreviewValue.toLocaleString(),
            "\u5186"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-gray-600 mb-1", children: "\u30E1\u30E2 (\u4EFB\u610F)" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              value: workloadForm.memo,
              onChange: (e) => setWorkloadForm({ ...workloadForm, memo: e.target.value }),
              className: "w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]",
              placeholder: "\u7A3C\u50CD\u306E\u632F\u308A\u8FD4\u308A\u3084\u7D50\u679C\u306A\u3069"
            }
          )
        ] })
      ] }),
      workloadError && /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs font-bold text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2", children: workloadError }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-5 pt-3 border-t border-gray-100", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setIsWorkloadModalOpen(false), className: "flex-1 bg-gray-100 text-gray-700 font-bold py-2.5 rounded-xl active:bg-gray-200", children: "\u30AD\u30E3\u30F3\u30BB\u30EB" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: saveWorkload,
            disabled: workloadSaving,
            className: "flex-1 bg-blue-600 disabled:bg-blue-300 text-white font-bold py-2.5 rounded-xl shadow-md active:bg-blue-700",
            children: workloadSaving ? "\u4FDD\u5B58\u4E2D..." : "\u4FDD\u5B58"
          }
        )
      ] })
    ] }) }),
    IS_ADMIN_MODE && isEditing && /* @__PURE__ */ jsx("button", { onClick: () => {
      setFormData({ name: "", detail: "", tag: "", imageUrl: "", link: "", memo: DEFAULT_MEMO_TEMPLATE });
      setModalConfig({ isOpen: true, mode: "add", itemId: null });
    }, className: "fixed bottom-20 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-all z-50 border-[3px] border-white", children: /* @__PURE__ */ jsx(Plus, { size: 32 }) }),
    detailModalConfig.isOpen && detailModalConfig.item && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/60 z-[110] flex items-center justify-center p-4 backdrop-blur-sm", onClick: () => setDetailModalConfig({ isOpen: false, item: null }), children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4 flex-none", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-black text-gray-800 leading-tight pr-4", children: detailModalConfig.item.name }),
        /* @__PURE__ */ jsx("button", { onClick: () => setDetailModalConfig({ isOpen: false, item: null }), className: "p-1.5 bg-gray-100 rounded-full text-gray-500 active:bg-gray-200 transition-colors", children: /* @__PURE__ */ jsx(X, { size: 20 }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-4 flex-none flex flex-wrap gap-2", children: detailModalConfig.item.tag && detailModalConfig.item.tag.split(",").map((t, idx) => {
        const colors = detailModalConfig.item.tagColor ? detailModalConfig.item.tagColor.split(",") : [];
        const color = colors[idx] ? colors[idx].trim() : colors[0] || "bg-white";
        return /* @__PURE__ */ jsx("div", { className: `inline-block px-3 py-1 rounded text-xs font-bold shadow-sm ${color}`, children: t.trim() }, idx);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "relative mb-6 flex-1 overflow-hidden flex flex-col min-h-[150px]", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-50 rounded-xl p-4 border border-gray-200 h-full overflow-y-auto", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 whitespace-pre-wrap font-medium leading-relaxed", children: detailModalConfig.item.memo || /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "\u8A73\u7D30\u306A\u72D9\u3044\u76EE\u30E1\u30E2\u306F\u307E\u3060\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002" }) }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 flex-none", children: [
        detailModalConfig.item.link && /* @__PURE__ */ jsxs("button", { onClick: () => window.open(detailModalConfig.item.link, "_blank", "noopener,noreferrer"), className: "w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-600 font-bold py-3.5 rounded-xl border border-blue-200", children: [
          /* @__PURE__ */ jsx(ExternalLink, { size: 18 }),
          "\u8A73\u3057\u3044\u89E3\u8AAC\u8A18\u4E8B\u3092\u898B\u308B"
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setDetailModalConfig({ isOpen: false, item: null }), className: "w-full bg-neutral-800 text-white font-bold py-3.5 rounded-xl shadow-md", children: "\u9589\u3058\u308B" })
      ] })
    ] }) }),
    showToast && /* @__PURE__ */ jsxs("div", { className: "fixed top-24 left-1/2 -translate-x-1/2 bg-neutral-900/90 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-2xl z-[70] animate-bounce flex flex-col items-center gap-1", children: [
      /* @__PURE__ */ jsx(Check, { size: 18, className: "text-blue-400" }),
      /* @__PURE__ */ jsx("span", { children: showToast })
    ] })
  ] });
};
const root = createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ jsx(AppErrorBoundary, { children: /* @__PURE__ */ jsx(App, {}) })
);
