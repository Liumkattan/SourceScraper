import { VidstreamingScrapper } from '../lib';

import { ISourceData } from 'sourcescrapper-core';

import chai = require('chai');
import 'mocha';
chai.should();

describe('VidstreamingScrapper', () => {
    it('should be able to scrap a video from a test page', async () => {
        const url = 'http://vidstreaming.io/streaming.php?id=NzUwMDI=&title=Mob+Psycho+100+Episode+9';
        const scrap = await VidstreamingScrapper.scrap(url);
        scrap.should.have.property('success').that.is.a('boolean').and.that.is.true;
        scrap.should.have.property('data').that.is.an('object').and.that.is.not.undefined;
        const data = scrap.data as ISourceData;
        data.should.have.property('sources').that.is.an('array');
        data.sources.length.should.be.greaterThan(0);
        data.sources.forEach(h => h.should.have.property('url').that.is.a('string'));
    });
});
