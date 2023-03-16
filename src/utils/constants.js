import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HeadsetIcon from "@mui/icons-material/Headset";

export const SidebarContent = [
  {
    label: "Discover",
    icon: <HeadsetIcon style={{ color: "#fff" }} />,
  },
  { label: "Search", icon: <SearchIcon style={{ color: "#fff" }} /> },
  { label: "Favourities", icon: <FavoriteIcon style={{ color: "#fff" }} /> },
  { label: "Playlists", icon: <PlayCircleIcon style={{ color: "#fff" }} /> },
  { label: "Charts", icon: <EqualizerIcon style={{ color: "#fff" }} /> },
];
