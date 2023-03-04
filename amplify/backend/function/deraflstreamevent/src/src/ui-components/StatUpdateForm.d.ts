/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Stat } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StatUpdateFormInputValues = {
    type?: string;
    createdAt?: string;
    updatedAt?: string;
    ethPaid?: number;
    ticketsBought?: number;
    royaltiesPaid?: number;
    chainId?: string;
    rafflesCreated?: number;
};
export declare type StatUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    ethPaid?: ValidationFunction<number>;
    ticketsBought?: ValidationFunction<number>;
    royaltiesPaid?: ValidationFunction<number>;
    chainId?: ValidationFunction<string>;
    rafflesCreated?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatUpdateFormOverridesProps = {
    StatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    ethPaid?: PrimitiveOverrideProps<TextFieldProps>;
    ticketsBought?: PrimitiveOverrideProps<TextFieldProps>;
    royaltiesPaid?: PrimitiveOverrideProps<TextFieldProps>;
    chainId?: PrimitiveOverrideProps<TextFieldProps>;
    rafflesCreated?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatUpdateFormProps = React.PropsWithChildren<{
    overrides?: StatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stat?: Stat;
    onSubmit?: (fields: StatUpdateFormInputValues) => StatUpdateFormInputValues;
    onSuccess?: (fields: StatUpdateFormInputValues) => void;
    onError?: (fields: StatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatUpdateFormInputValues) => StatUpdateFormInputValues;
    onValidate?: StatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StatUpdateForm(props: StatUpdateFormProps): React.ReactElement;
