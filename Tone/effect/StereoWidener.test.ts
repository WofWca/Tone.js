import { StereoWidener } from "./StereoWidener";
import { BasicTests } from "test/helper/Basic";
import { EffectTests } from "test/helper/EffectTests";
import { expect } from "chai";
import { CompareToFile } from "test/helper/CompareToFile";
import { ToneAudioBuffer } from "Tone/core/context/ToneAudioBuffer";
import { Player } from "Tone/source/buffer/Player";
import "test/helper/ToneAudioBuffer";

describe("StereoWidener", () => {

	BasicTests(StereoWidener);
	EffectTests(StereoWidener, 0);

	context("API", () => {

		it("can pass in options in the constructor", () => {
			const widener = new StereoWidener(0.2);
			expect(widener.width.value).to.be.closeTo(0.2, 0.001);
			widener.dispose();
		});

		it("can get/set the options", () => {
			const widener = new StereoWidener();
			widener.set({
				width: 0.4,
			});
			expect(widener.width.value).to.be.closeTo(0.4, 0.001);
			widener.dispose();
		});
	});
});

