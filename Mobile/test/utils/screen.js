async function dump(label = 'TELA') {
    try {
        const pkg = await driver.getCurrentPackage();
        const activity = await driver.getCurrentActivity();
        console.log(`### ===== ${label} | ${pkg} / ${activity} =====`);

        const source = await driver.getPageSource();
        const re = /<([\w.]+)\s([^>]*?)\/?>/g;
        let m;
        while ((m = re.exec(source)) !== null) {
            const tag = m[1].replace('android.widget.', '').replace('android.view.', '');
            const attrs = m[2];
            const get = (name) => {
                const r = attrs.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`));
                return r ? r[1] : '';
            };
            const text = get('text');
            const desc = get('content-desc');
            const rid = get('resource-id').replace('com.woocommerce.android:id/', '');
            const clickable = get('clickable');
            if (text || desc || rid) {
                console.log(`### ${tag} | text="${text}" | desc="${desc}" | id="${rid}" | clickable=${clickable}`);
            }
        }
        console.log(`### ===== FIM ${label} =====`);
    } catch (e) {
        console.log(`### Falha ao coletar a tela (${label}): ${e.message}`);
    }
}

module.exports = { dump };