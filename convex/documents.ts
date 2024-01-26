import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const get = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Not logged in");

    const documents = await ctx.db.query("documents").collect();

    return documents;
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    genQuestion: v.string(),
    genExamples: v.string(),
    constraints: v.string(),
    givenCode: v.string(),
    testCases: v.string(),
    notes: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not logged in");
    }

    const userId = identity.subject;

    const document = await ctx.db.insert("documents", {
      title: args.title,
      userId,
      isArchived: false,
      isPublished: false,
      genQuestion: args.genQuestion,
      genExamples: args.genExamples,
      constraints: args.constraints,
      givenCode: args.givenCode,
      testCases: args.testCases,
      notes: args.notes,
    });

    return document;
  },
});
