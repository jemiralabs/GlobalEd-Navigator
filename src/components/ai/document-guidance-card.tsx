"use client";

import { useState } from "react";
import { aiDocumentGuidance } from "@/ai/flows/ai-document-guidance";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DocumentGuidanceCard({ docType }: { docType: string }) {
  const [loading, setLoading] = useState(false);
  const [tips, setTips] = useState<string | null>(null);

  const getGuidance = async () => {
    setLoading(true);
    try {
      const result = await aiDocumentGuidance({ documentType: docType });
      setTips(result.tips);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="rounded-2xl border-dashed border-2 border-primary/30 bg-primary/5 overflow-hidden">
      <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Sparkles className="text-primary w-4 h-4" />
          AI Guidance Tool
        </CardTitle>
        <Info className="w-4 h-4 text-muted-foreground opacity-50" />
      </CardHeader>
      <CardContent className="p-4">
        {!tips ? (
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Get AI-powered tips and best practices for your {docType} to increase your admission chances.
            </p>
            <Button 
              onClick={getGuidance} 
              disabled={loading}
              variant="outline"
              size="sm"
              className="w-full bg-white border-primary/20 text-primary hover:bg-primary/5 rounded-xl h-10"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : "Generate Tips"}
            </Button>
          </div>
        ) : (
          <div className="space-y-3 animate-fade-in">
            <div className="text-[11px] text-muted-foreground max-h-40 overflow-y-auto pr-2 custom-scrollbar whitespace-pre-line bg-white/50 p-3 rounded-xl border border-white">
              {tips}
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full text-primary hover:bg-transparent p-0 h-auto font-bold text-[10px] uppercase"
              onClick={() => setTips(null)}
            >
              Close Tips
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}