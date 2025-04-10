const { getSettings, getGroupSetting, updateGroupSetting } = require('../../config');
const ownerMiddleware = require('../../utility/botUtil/Ownermiddleware');

module.exports = async (context) => {
    await ownerMiddleware(context, async () => {
        const { m, args } = context;
        const value = args[0]?.toLowerCase();
        const jid = m.chat;

        if (!jid.endsWith('@g.us')) {
            return await m.reply('❌ This command can only be used in groups.');
        }

        const settings = await getSettings();
        const prefix = settings.prefix;

        const currentSetting = await getGroupSetting(jid, 'antidelete');
        const isEnabled = currentSetting === true;

        if (value === 'on' || value === 'off') {
            const action = value === 'on';
            if (isEnabled === action) {
                return await m.reply(`✅ Antidelete is already ${value.toUpperCase()}.`);
            }

            await updateGroupSetting(jid, 'antidelete', action);
            await m.reply(`✅ Antidelete has been turned ${value.toUpperCase()} for this group. Deleted messages will be forwarded to your inbox.`);
        } else {
            await m.reply(`📄 Current Antidelete setting for this group: ${isEnabled ? 'ON' : 'OFF'}\n\n_Use ${prefix}antidelete on or ${prefix}antidelete off to change it._`);
        }
    });
};