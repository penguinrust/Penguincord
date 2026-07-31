/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

<<<<<<< HEAD
<<<<<<< HEAD
import { EquicordDevs } from "@utils/constants";
=======
import { disableStyle, enableStyle } from "@api/Styles";
import { PenguincordDevs } from "@utils/constants";
>>>>>>> 81c92ec9d (So much done that i cant remember)
=======
import { disableStyle, enableStyle } from "@api/Styles";
import { PenguincordDevs } from "@utils/constants";
>>>>>>> 6643588083d9631eaf62d9d4556dc532d634e4c3
import { getUserAvatarUrl } from "@utils/misc";
import definePlugin from "@utils/types";
import { ChannelRTCStore, ChannelStore, UserStore, VoiceStateStore } from "@webpack/common";

import style from "./style.css?managed";

export default definePlugin({
    name: "FullVCPFP",
    description: "Makes avatars take up the entire vc tile",
    tags: ["Appearance", "Voice"],
<<<<<<< HEAD
<<<<<<< HEAD
    authors: [EquicordDevs.mochienya],
    managedStyle: style,
=======
    authors: [PenguincordDevs.mochienya],
>>>>>>> 81c92ec9d (So much done that i cant remember)
=======
    authors: [PenguincordDevs.mochienya],
>>>>>>> 6643588083d9631eaf62d9d4556dc532d634e4c3
    patches: [
        {
            find: "\"data-selenium-video-tile\":",
            replacement: {
                match: /(?<=function\((\i),\i\)\{)/,
                replace: "Object.assign($1.style=$1.style||{},$self.getVoiceBackgroundStyles($1));",
            }
        },
    ],

    getVoiceBackgroundStyles({ className, participantUserId }: { className?: string; participantUserId?: string; }) {
        if (!className?.includes("tile") || !participantUserId) return;

        const user = UserStore.getUser(participantUserId);
        if (!user) return;

        const channelId = VoiceStateStore.getVoiceStateForUser(participantUserId)?.channelId;
        if (!channelId) return;

        const guildId = ChannelStore.getChannel(channelId)?.guild_id;
        const isSpeaking = ChannelRTCStore.getSpeakingParticipants(channelId).some(p => p.user.id === participantUserId && p.speaking);
        const avatarUrl = getUserAvatarUrl(user, guildId, isSpeaking, 1024);

        return {
            "--full-res-avatar": `url(${avatarUrl})`
        };
    },
});
