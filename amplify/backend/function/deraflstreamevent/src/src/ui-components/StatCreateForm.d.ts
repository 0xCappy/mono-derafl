/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StatCreateFormInputValues = {
    type?: string;
    createdAt?: string;
    updatedAt?: string;
    ethPaid?: number;
    ticketsBought?: number;
    royaltiesPaid?: number;
    chainId?: string;
    rafflesCreated?: number;
};
export declare type StatCreateFormValidationValues = {
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
export declare type StatCreateFormOverridesProps = {
    StatCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    ethPaid?: PrimitiveOverrideProps<TextFieldProps>;
    ticketsBought?: PrimitiveOverrideProps<TextFieldProps>;
    royaltiesPaid?: PrimitiveOverrideProps<TextFieldProps>;
    chainId?: PrimitiveOverrideProps<TextFieldProps>;
    rafflesCreated?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatCreateFormProps = React.PropsWithChildren<{
    overrides?: StatCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StatCreateFormInputValues) => StatCreateFormInputValues;
    onSuccess?: (fields: StatCreateFormInputValues) => void;
    onError?: (fields: StatCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatCreateFormInputValues) => StatCreateFormInputValues;
    onValidate?: StatCreateFormValidationValues;
} & React.CSSProperties>;
export default function StatCreateForm(props: StatCreateFormProps): React.ReactElement;
