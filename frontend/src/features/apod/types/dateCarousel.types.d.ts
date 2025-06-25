export interface DateCarouselProps {
    dates: Date[];
    selectedDate: Date;
    onSelect: (date: Date) => void;
    onPrevious: () => void;
    onNext: () => void;
    disableNext?: boolean;
}
