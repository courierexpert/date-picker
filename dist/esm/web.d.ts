import { WebPlugin } from '@capacitor/core';
import type { DatePickerOptions, DatePickerPlugin } from './definitions';
export declare class DatePickerWeb extends WebPlugin implements DatePickerPlugin {
    present(_options: DatePickerOptions): Promise<{
        value: string;
    }>;
}
