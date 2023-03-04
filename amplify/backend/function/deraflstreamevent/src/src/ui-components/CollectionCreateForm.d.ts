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
export declare type CollectionCreateFormInputValues = {
    type?: string;
    contractAddress?: string;
    createdAt?: string;
    updatedAt?: string;
    symbol?: string;
    rafflesCreated?: number;
    contractDeployer?: string;
    deployedBlockNumber?: number;
    tokenType?: string;
    totalSupply?: string;
    chainId?: string;
    name?: string;
    openseaSlug?: string;
    imageUrl?: string;
    externalUrl?: string;
    discordUrl?: string;
    twitterUsername?: string;
    description?: string;
    floorPrice?: number;
};
export declare type CollectionCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    contractAddress?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    symbol?: ValidationFunction<string>;
    rafflesCreated?: ValidationFunction<number>;
    contractDeployer?: ValidationFunction<string>;
    deployedBlockNumber?: ValidationFunction<number>;
    tokenType?: ValidationFunction<string>;
    totalSupply?: ValidationFunction<string>;
    chainId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    openseaSlug?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    externalUrl?: ValidationFunction<string>;
    discordUrl?: ValidationFunction<string>;
    twitterUsername?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    floorPrice?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CollectionCreateFormOverridesProps = {
    CollectionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    contractAddress?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    symbol?: PrimitiveOverrideProps<TextFieldProps>;
    rafflesCreated?: PrimitiveOverrideProps<TextFieldProps>;
    contractDeployer?: PrimitiveOverrideProps<TextFieldProps>;
    deployedBlockNumber?: PrimitiveOverrideProps<TextFieldProps>;
    tokenType?: PrimitiveOverrideProps<TextFieldProps>;
    totalSupply?: PrimitiveOverrideProps<TextFieldProps>;
    chainId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    openseaSlug?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    externalUrl?: PrimitiveOverrideProps<TextFieldProps>;
    discordUrl?: PrimitiveOverrideProps<TextFieldProps>;
    twitterUsername?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    floorPrice?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CollectionCreateFormProps = React.PropsWithChildren<{
    overrides?: CollectionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CollectionCreateFormInputValues) => CollectionCreateFormInputValues;
    onSuccess?: (fields: CollectionCreateFormInputValues) => void;
    onError?: (fields: CollectionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CollectionCreateFormInputValues) => CollectionCreateFormInputValues;
    onValidate?: CollectionCreateFormValidationValues;
} & React.CSSProperties>;
export default function CollectionCreateForm(props: CollectionCreateFormProps): React.ReactElement;
