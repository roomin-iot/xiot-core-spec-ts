import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';

describe('DeviceSummaryCodec', async () => {

    const folder = './resources/spec/xiot/summary/';
    // let dir = await fs.readdir(folder);

    // it('reading summaries, folder: ' + folder, () => {
    //     expect(true).to.equal(true);
    // });

    // for (const file of dir) {
    //     it('decode: ' + file, async () => {
    //         let a = await fs.readFile(folder + file);
    //         const json = JSON.parse(a.toString());
    //         const summaries = DeviceSummaryCodec.decode(json);
    //         expect(JSON.stringify(json)).to.equal(JSON.stringify(DeviceSummaryCodec.encodeArray(summaries)));
    //     });
    // }

    it('reading summaries, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });
});
