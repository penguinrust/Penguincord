/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { PenguincordDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "StopAutoUnread",
    description: 'Stops Discord from automatically bumping a channels notification setting to "All Messages"',
<<<<<<< HEAD
<<<<<<< HEAD
    tags: ["Notifications"],
    authors: [EquicordDevs.SobakinTech],
=======
    authors: [PenguincordDevs.SobakinTech],
>>>>>>> 81c92ec9d (So much done that i cant remember)
=======
    authors: [PenguincordDevs.SobakinTech],
>>>>>>> 6643588083d9631eaf62d9d4556dc532d634e4c3
    patches: [
        {
            find: "}maybeAutoUpgradeChannel(",
            replacement: {
                match: /maybeAutoUpgradeChannel\(\i\){/,
                replace: "$&return !1;"
            }
        }
    ]
});
